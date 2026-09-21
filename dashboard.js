// Learning Roots Royal Academy — dashboard rendering engine (demo data, front-end only)
(function () {
  var D = window.SCHOOL_DATA;
  if (!D) return;

  function el(html) {
    var t = document.createElement('template');
    t.innerHTML = html.trim();
    return t.content.firstChild;
  }
  function each(list, fn) {
    for (var i = 0; i < list.length; i++) fn(list[i], i);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function payClass(p) {
    return 'pay-' + p.toLowerCase().replace(/\s+/g, '-');
  }

  // ---------- tabs ----------
  function initTabs(root) {
    var buttons = root.querySelectorAll('.dtabs button');
    each(buttons, function (btn) {
      btn.addEventListener('click', function () {
        each(buttons, function (b) { b.classList.remove('active'); });
        each(root.querySelectorAll('.dpane'), function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
      });
    });
  }
  window.LRRA_initTabs = initTabs;

  // ---------- house badge ----------
  function houseBadge(house) {
    var color = D.houseColors[house] || '#888';
    return '<span class="house-badge" style="background:' + color + (house === 'White' ? ';color:#111b52' : '') + '"><span class="house-dot"></span>' + esc(house) + '</span>';
  }
  window.LRRA_houseBadge = houseBadge;

  // ---------- rating meters ----------
  function ratingMeters(ratings) {
    return D.ratingCategories.map(function (cat) {
      var v = ratings[cat] || 0;
      return '<div class="rating-row"><span class="label">' + esc(cat) + '</span>' +
        '<span class="rating-meter"><span style="width:' + (v / 5 * 100) + '%"></span></span>' +
        '<span class="val">' + v + '/5</span></div>';
    }).join('');
  }
  window.LRRA_ratingMeters = ratingMeters;

  // ---------- comment box (per student) ----------
  var commentSeq = 0;
  function commentBox(student, opts) {
    opts = opts || {};
    var uid = 'cm_' + (commentSeq++);
    var count = student.comments.length;
    var items = student.comments.map(function (c) {
      return '<div class="comment-item"><span class="who">' + esc(c.author) + '</span><span class="role-tag">' + esc(c.role) + '</span>' +
        '<div>' + esc(c.text) + '</div><div style="color:#9aa0ab;font-size:11px">' + esc(c.date) + '</div></div>';
    }).join('') || '<div class="comment-item" style="color:#9aa0ab">No comments yet.</div>';

    var formHtml = opts.canComment
      ? '<div class="comment-form"><input type="text" placeholder="' + esc(opts.placeholder || 'Add a comment...') + '" data-role="input"><button data-role="submit">Post</button></div>'
      : '';

    var wrap = el(
      '<span style="position:relative;display:inline-block">' +
      '<button class="comment-btn" type="button" aria-label="Comments">\uD83D\uDCAC<span class="n">' + count + '</span></button>' +
      '<div class="comment-panel" id="' + uid + '">' + items + formHtml + '</div>' +
      '</span>'
    );
    var btn = wrap.querySelector('.comment-btn');
    var panel = wrap.querySelector('.comment-panel');
    btn.addEventListener('click', function () { panel.classList.toggle('open'); });

    if (opts.canComment) {
      var input = panel.querySelector('[data-role="input"]');
      var submit = panel.querySelector('[data-role="submit"]');
      submit.addEventListener('click', function () {
        var text = input.value.trim();
        if (!text) return;
        var c = { role: opts.role, author: opts.author, text: text, date: 'Just now' };
        student.comments.push(c);
        var item = el('<div class="comment-item"><span class="who">' + esc(c.author) + '</span><span class="role-tag">' + esc(c.role) + '</span><div>' + esc(c.text) + '</div><div style="color:#9aa0ab;font-size:11px">Just now</div></div>');
        panel.insertBefore(item, panel.querySelector('.comment-form'));
        input.value = '';
        btn.querySelector('.n').textContent = student.comments.length;
      });
    }
    return wrap;
  }
  window.LRRA_commentBox = commentBox;

  // ---------- student filter/table builder ----------
  // opts: { students, showPayment, showHouse, editableSubjects (array or null), canComment, commentRole, commentAuthor, container }
  function renderStudentTable(opts) {
    var container = opts.container;
    var all = opts.students;

    var filterWrap = el(
      '<div>' +
      '<div class="filterbar">' +
      '<select data-f="class"><option value="">All classes</option>' + D.classes.map(function (c) { return '<option>' + c + '</option>'; }).join('') + '</select>' +
      '<select data-f="gender"><option value="">All genders</option><option value="M">Male</option><option value="F">Female</option></select>' +
      '<select data-f="grade"><option value="">All grades</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select>' +
      '<select data-f="age"><option value="">All ages</option>' + Array.from(new Set(all.map(function(s){return s.age;}))).sort().map(function(a){return '<option>'+a+'</option>';}).join('') + '</select>' +
      (opts.showHouse ? '<select data-f="house"><option value="">All houses</option>' + D.houses.map(function (h) { return '<option>' + h + '</option>'; }).join('') + '</select>' : '') +
      '<span class="count"></span>' +
      '</div><div class="table-wrap"><table class="table"><thead><tr></tr></thead><tbody></tbody></table></div>' +
      '</div>'
    );
    container.appendChild(filterWrap);

    var headRow = filterWrap.querySelector('thead tr');
    var subjectCols = opts.subjectCols || [];
    var headCells = ['Name', 'Class', 'Age', 'Gender'];
    if (opts.showHouse) headCells.push('House');
    subjectCols.forEach(function (s) { headCells.push(s); });
    if (subjectCols.length || opts.showAverage) headCells.push('Average');
    headCells.push('Attendance');
    if (opts.showPayment) headCells.push('Payment');
    headCells.push('Notes');
    headRow.innerHTML = headCells.map(function (h) { return '<th>' + h + '</th>'; }).join('');

    var tbody = filterWrap.querySelector('tbody');
    var countEl = filterWrap.querySelector('.count');

    function studentAvgGrade(s) {
      var vals = Object.keys(s.scores).map(function (k) { return s.scores[k].total; });
      if (!vals.length) return { avg: 0, grade: '-' };
      var avg = Math.round(vals.reduce(function (a, b) { return a + b; }, 0) / vals.length);
      var grade = avg >= 75 ? 'A' : avg >= 65 ? 'B' : avg >= 55 ? 'C' : avg >= 45 ? 'D' : 'E';
      return { avg: avg, grade: grade };
    }

    function draw() {
      var f = {};
      each(filterWrap.querySelectorAll('[data-f]'), function (s) { f[s.dataset.f] = s.value; });
      var rows = all.filter(function (s) {
        if (f.class && s.class !== f.class) return false;
        if (f.gender && s.gender !== f.gender) return false;
        if (f.age && String(s.age) !== f.age) return false;
        if (f.house && s.house !== f.house) return false;
        if (f.grade) {
          var ag = studentAvgGrade(s).grade;
          if (ag !== f.grade) return false;
        }
        return true;
      });
      countEl.textContent = rows.length + ' student' + (rows.length === 1 ? '' : 's');
      tbody.innerHTML = '';
      rows.forEach(function (s) {
        var tr = document.createElement('tr');
        var cells = '<td>' + esc(s.name) + '</td><td>' + s.class + '</td><td>' + s.age + '</td><td>' + (s.gender === 'M' ? 'Male' : 'Female') + '</td>';
        if (opts.showHouse) cells += '<td>' + houseBadge(s.house) + '</td>';
        subjectCols.forEach(function (subj) {
          var sc = s.scores[subj];
          if (!sc) { cells += '<td>\u2014</td>'; return; }
          if (opts.editable) {
            cells += '<td data-subj="' + subj + '" data-sid="' + s.id + '">' +
              '<input class="score-input" type="number" min="0" max="20" value="' + sc.ca1 + '" data-part="ca1"> + ' +
              '<input class="score-input" type="number" min="0" max="20" value="' + sc.ca2 + '" data-part="ca2"> + ' +
              '<input class="score-input" type="number" min="0" max="60" value="' + sc.exam + '" data-part="exam"> = ' +
              '<span class="score-total">' + sc.total + '</span> <span class="grade-pill grade-' + sc.grade + '">' + sc.grade + '</span></td>';
          } else {
            cells += '<td>' + sc.total + ' <span class="grade-pill grade-' + sc.grade + '">' + sc.grade + '</span></td>';
          }
        });
        if (subjectCols.length || opts.showAverage) {
          var ag = studentAvgGrade(s);
          cells += '<td><b>' + ag.avg + '</b> <span class="grade-pill grade-' + ag.grade + '">' + ag.grade + '</span></td>';
        }
        cells += '<td>' + s.attendance + '%</td>';
        if (opts.showPayment) {
          cells += '<td><span class="pay-pill ' + payClass(s.payment) + '">' + s.payment + '</span></td>';
        }
        tr.innerHTML = cells;
        var notesTd = document.createElement('td');
        notesTd.appendChild(commentBox(s, {
          canComment: opts.canComment,
          role: opts.commentRole,
          author: opts.commentAuthor,
          placeholder: opts.commentPlaceholder,
        }));
        tr.appendChild(notesTd);
        tbody.appendChild(tr);

        if (opts.editable) {
          each(tr.querySelectorAll('.score-input'), function (inp) {
            inp.addEventListener('input', function () {
              var td = inp.closest('td');
              var subj = td.dataset.subj;
              var sc = s.scores[subj];
              sc[inp.dataset.part] = Math.max(0, parseInt(inp.value || '0', 10));
              sc.total = Math.min(100, sc.ca1 + sc.ca2 + sc.exam);
              sc.grade = sc.total >= 75 ? 'A' : sc.total >= 65 ? 'B' : sc.total >= 55 ? 'C' : sc.total >= 45 ? 'D' : 'E';
              td.querySelector('.score-total').textContent = sc.total;
              var pill = td.querySelector('.grade-pill');
              pill.className = 'grade-pill grade-' + sc.grade;
              pill.textContent = sc.grade;
            });
          });
        }
      });
    }
    each(filterWrap.querySelectorAll('[data-f]'), function (s) { s.addEventListener('change', draw); });
    draw();
  }
  window.LRRA_renderStudentTable = renderStudentTable;

  // ---------- calendar ----------
  function renderCalendar(container, events) {
    var wrap = el('<div class="cal-list"></div>');
    (events || D.calendarEvents).forEach(function (e) {
      wrap.appendChild(el(
        '<div class="cal-item"><span class="d">' + e.date + '</span>' +
        '<span class="cal-tag cal-tag-' + e.type.replace(/\s+/g, '-') + '">' + e.type + '</span>' +
        '<span>' + esc(e.title) + '</span></div>'
      ));
    });
    container.appendChild(wrap);
  }
  window.LRRA_renderCalendar = renderCalendar;

  // ---------- transport ----------
  function renderTransport(container) {
    Object.keys(D.transportRoutes).forEach(function (route) {
      var stops = D.transportRoutes[route];
      var stopsHtml = stops.map(function (s, i) {
        return '<span class="stop">' + (i + 1) + '. ' + esc(s) + '</span>' + (i < stops.length - 1 ? '<span class="arrow">\u2192</span>' : '');
      }).join('');
      container.appendChild(el(
        '<div class="route-card"><h4>' + esc(route) + '</h4><div class="meta">' + esc(D.transportTimes[route]) + '</div>' +
        '<div class="route-stops">' + stopsHtml + '</div></div>'
      ));
    });
  }
  window.LRRA_renderTransport = renderTransport;

  document.addEventListener('DOMContentLoaded', function () {
    each(document.querySelectorAll('[data-dtabs]'), initTabs);
  });
})();
