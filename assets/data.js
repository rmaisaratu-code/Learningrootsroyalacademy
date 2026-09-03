// Learning Roots Royal Academy — sample demo data (front-end only, not persisted)
window.SCHOOL_DATA = {
 "classes": [
  "JSS1",
  "JSS2",
  "SS1",
  "SS2"
 ],
 "houses": [
  "Yellow",
  "Black",
  "White",
  "Green"
 ],
 "houseColors": {
  "Yellow": "#e0a800",
  "Black": "#1a1a1a",
  "White": "#8a8f9c",
  "Green": "#1f8a4c"
 },
 "subjects": {
  "JSS1": [
   "Mathematics",
   "English Language",
   "Basic Science",
   "Social Studies",
   "Computer Studies",
   "Agricultural Science",
   "CRS/IRS",
   "PHE"
  ],
  "JSS2": [
   "Mathematics",
   "English Language",
   "Basic Science",
   "Social Studies",
   "Computer Studies",
   "Agricultural Science",
   "CRS/IRS",
   "PHE"
  ],
  "SS1": [
   "Mathematics",
   "English Language",
   "Biology",
   "Chemistry",
   "Physics",
   "Economics",
   "Civic Education",
   "Literature-in-English"
  ],
  "SS2": [
   "Mathematics",
   "English Language",
   "Biology",
   "Chemistry",
   "Physics",
   "Economics",
   "Civic Education",
   "Literature-in-English"
  ]
 },
 "teachers": [
  {
   "id": "T1",
   "name": "Mr. Ibrahim Sule",
   "gender": "M",
   "subjects": [
    "Mathematics"
   ],
   "classes": [
    "JSS1",
    "JSS2"
   ],
   "form_class": "JSS1",
   "role": "Teacher"
  },
  {
   "id": "T2",
   "name": "Mrs. Grace Danladi",
   "gender": "F",
   "subjects": [
    "English Language",
    "Literature-in-English"
   ],
   "classes": [
    "JSS1",
    "SS1"
   ],
   "form_class": "SS1",
   "role": "Teacher"
  },
  {
   "id": "T3",
   "name": "Mr. Yusuf Waziri",
   "gender": "M",
   "subjects": [
    "Biology",
    "Basic Science"
   ],
   "classes": [
    "JSS2",
    "SS1",
    "SS2"
   ],
   "form_class": "SS2",
   "role": "Vice Principal (Academics)"
  },
  {
   "id": "T4",
   "name": "Mrs. Esther Michael",
   "gender": "F",
   "subjects": [
    "Chemistry",
    "Agricultural Science"
   ],
   "classes": [
    "JSS2",
    "SS2"
   ],
   "form_class": "JSS2",
   "role": "Teacher"
  },
  {
   "id": "T5",
   "name": "Mr. Samuel Peters",
   "gender": "M",
   "subjects": [
    "Physics",
    "Computer Studies"
   ],
   "classes": [
    "SS1",
    "SS2"
   ],
   "form_class": null,
   "role": "Teacher"
  },
  {
   "id": "T6",
   "name": "Mrs. Aisha Bello",
   "gender": "F",
   "subjects": [
    "Social Studies",
    "Civic Education",
    "CRS/IRS"
   ],
   "classes": [
    "JSS1",
    "SS1"
   ],
   "form_class": null,
   "role": "Teacher"
  }
 ],
 "ratingCategories": [
  "Academic Effort",
  "Behavioral Conduct",
  "Communication & Participation",
  "Athletics & Sports",
  "Extracurricular Activities",
  "Leadership & Teamwork"
 ],
 "students": [
  {
   "id": "S001",
   "name": "Timothy Adamu",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 19,
     "ca2": 12,
     "exam": 40,
     "total": 71,
     "grade": "B"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 10,
     "exam": 31,
     "total": 52,
     "grade": "D"
    },
    "Basic Science": {
     "ca1": 18,
     "ca2": 19,
     "exam": 59,
     "total": 96,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 9,
     "ca2": 17,
     "exam": 52,
     "total": 78,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 8,
     "exam": 30,
     "total": 46,
     "grade": "D"
    },
    "Agricultural Science": {
     "ca1": 11,
     "ca2": 11,
     "exam": 57,
     "total": 79,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 17,
     "ca2": 8,
     "exam": 60,
     "total": 85,
     "grade": "A"
    },
    "PHE": {
     "ca1": 11,
     "ca2": 19,
     "exam": 59,
     "total": 89,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 89,
   "comments": []
  },
  {
   "id": "S002",
   "name": "Zulaiha Bulus",
   "gender": "F",
   "age": 11,
   "class": "JSS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 10,
     "exam": 38,
     "total": 60,
     "grade": "C"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 13,
     "exam": 31,
     "total": 64,
     "grade": "C"
    },
    "Basic Science": {
     "ca1": 9,
     "ca2": 14,
     "exam": 31,
     "total": 54,
     "grade": "D"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 13,
     "exam": 41,
     "total": 67,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 20,
     "ca2": 8,
     "exam": 54,
     "total": 82,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 16,
     "ca2": 9,
     "exam": 49,
     "total": 74,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 9,
     "ca2": 16,
     "exam": 43,
     "total": 68,
     "grade": "B"
    },
    "PHE": {
     "ca1": 18,
     "ca2": 17,
     "exam": 48,
     "total": 83,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S003",
   "name": "Esther Peters",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 12,
     "exam": 54,
     "total": 80,
     "grade": "A"
    },
    "English Language": {
     "ca1": 18,
     "ca2": 13,
     "exam": 35,
     "total": 66,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 13,
     "ca2": 13,
     "exam": 38,
     "total": 64,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 18,
     "ca2": 12,
     "exam": 29,
     "total": 59,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 17,
     "ca2": 18,
     "exam": 35,
     "total": 70,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 16,
     "ca2": 19,
     "exam": 40,
     "total": 75,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 10,
     "ca2": 15,
     "exam": 49,
     "total": 74,
     "grade": "B"
    },
    "PHE": {
     "ca1": 12,
     "ca2": 18,
     "exam": 60,
     "total": 90,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S004",
   "name": "Aliyu Mustapha",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 17,
     "ca2": 19,
     "exam": 45,
     "total": 81,
     "grade": "A"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 18,
     "exam": 56,
     "total": 85,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 14,
     "ca2": 18,
     "exam": 54,
     "total": 86,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 10,
     "ca2": 12,
     "exam": 33,
     "total": 55,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 11,
     "ca2": 19,
     "exam": 60,
     "total": 90,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 16,
     "ca2": 12,
     "exam": 52,
     "total": 80,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 17,
     "ca2": 14,
     "exam": 48,
     "total": 79,
     "grade": "A"
    },
    "PHE": {
     "ca1": 11,
     "ca2": 10,
     "exam": 57,
     "total": 78,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S005",
   "name": "Caleb Mustapha",
   "gender": "M",
   "age": 11,
   "class": "JSS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 17,
     "exam": 54,
     "total": 85,
     "grade": "A"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 12,
     "exam": 60,
     "total": 88,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 8,
     "ca2": 18,
     "exam": 32,
     "total": 58,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 18,
     "ca2": 16,
     "exam": 42,
     "total": 76,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 20,
     "ca2": 18,
     "exam": 46,
     "total": 84,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 9,
     "ca2": 12,
     "exam": 52,
     "total": 73,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 10,
     "ca2": 15,
     "exam": 25,
     "total": 50,
     "grade": "D"
    },
    "PHE": {
     "ca1": 19,
     "ca2": 19,
     "exam": 41,
     "total": 79,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Part-paid",
   "attendance": 90,
   "comments": []
  },
  {
   "id": "S006",
   "name": "Zainab Haruna",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 20,
     "exam": 58,
     "total": 94,
     "grade": "A"
    },
    "English Language": {
     "ca1": 8,
     "ca2": 17,
     "exam": 45,
     "total": 70,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 15,
     "ca2": 8,
     "exam": 32,
     "total": 55,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 20,
     "exam": 44,
     "total": 77,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 11,
     "ca2": 8,
     "exam": 40,
     "total": 59,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 17,
     "ca2": 9,
     "exam": 30,
     "total": 56,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 19,
     "ca2": 15,
     "exam": 29,
     "total": 63,
     "grade": "C"
    },
    "PHE": {
     "ca1": 20,
     "ca2": 16,
     "exam": 33,
     "total": 69,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S007",
   "name": "Deborah Andrew",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 19,
     "ca2": 12,
     "exam": 50,
     "total": 81,
     "grade": "A"
    },
    "English Language": {
     "ca1": 18,
     "ca2": 18,
     "exam": 48,
     "total": 84,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 15,
     "ca2": 16,
     "exam": 53,
     "total": 84,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 9,
     "ca2": 11,
     "exam": 39,
     "total": 59,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 9,
     "ca2": 13,
     "exam": 26,
     "total": 48,
     "grade": "D"
    },
    "Agricultural Science": {
     "ca1": 17,
     "ca2": 16,
     "exam": 39,
     "total": 72,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 17,
     "ca2": 11,
     "exam": 25,
     "total": 53,
     "grade": "D"
    },
    "PHE": {
     "ca1": 9,
     "ca2": 19,
     "exam": 28,
     "total": 56,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S008",
   "name": "Yusuf Andrew",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 19,
     "ca2": 17,
     "exam": 55,
     "total": 91,
     "grade": "A"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 20,
     "exam": 55,
     "total": 86,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 20,
     "ca2": 14,
     "exam": 37,
     "total": 71,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 9,
     "ca2": 9,
     "exam": 52,
     "total": 70,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 13,
     "ca2": 14,
     "exam": 51,
     "total": 78,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 15,
     "ca2": 19,
     "exam": 28,
     "total": 62,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 18,
     "exam": 31,
     "total": 67,
     "grade": "B"
    },
    "PHE": {
     "ca1": 8,
     "ca2": 14,
     "exam": 46,
     "total": 68,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 89,
   "comments": []
  },
  {
   "id": "S009",
   "name": "Joseph Yakubu",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 15,
     "exam": 60,
     "total": 84,
     "grade": "A"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 8,
     "exam": 59,
     "total": 76,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 8,
     "ca2": 9,
     "exam": 40,
     "total": 57,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 10,
     "ca2": 14,
     "exam": 56,
     "total": 80,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 15,
     "ca2": 11,
     "exam": 50,
     "total": 76,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 8,
     "ca2": 10,
     "exam": 49,
     "total": 67,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 14,
     "exam": 41,
     "total": 63,
     "grade": "C"
    },
    "PHE": {
     "ca1": 20,
     "ca2": 20,
     "exam": 54,
     "total": 94,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Part-paid",
   "attendance": 88,
   "comments": []
  },
  {
   "id": "S010",
   "name": "Hauwa Thomas",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 8,
     "ca2": 17,
     "exam": 59,
     "total": 84,
     "grade": "A"
    },
    "English Language": {
     "ca1": 8,
     "ca2": 19,
     "exam": 45,
     "total": 72,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 8,
     "ca2": 8,
     "exam": 55,
     "total": 71,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 16,
     "ca2": 16,
     "exam": 35,
     "total": 67,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 16,
     "exam": 30,
     "total": 54,
     "grade": "D"
    },
    "Agricultural Science": {
     "ca1": 10,
     "ca2": 9,
     "exam": 29,
     "total": 48,
     "grade": "D"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 11,
     "exam": 50,
     "total": 79,
     "grade": "A"
    },
    "PHE": {
     "ca1": 9,
     "ca2": 17,
     "exam": 40,
     "total": 66,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 94,
   "comments": []
  },
  {
   "id": "S011",
   "name": "Comfort James",
   "gender": "F",
   "age": 11,
   "class": "JSS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 11,
     "ca2": 12,
     "exam": 50,
     "total": 73,
     "grade": "B"
    },
    "English Language": {
     "ca1": 10,
     "ca2": 18,
     "exam": 44,
     "total": 72,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 15,
     "ca2": 13,
     "exam": 29,
     "total": 57,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 8,
     "ca2": 15,
     "exam": 31,
     "total": 54,
     "grade": "D"
    },
    "Computer Studies": {
     "ca1": 9,
     "ca2": 16,
     "exam": 38,
     "total": 63,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 16,
     "ca2": 12,
     "exam": 33,
     "total": 61,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 13,
     "ca2": 9,
     "exam": 40,
     "total": 62,
     "grade": "C"
    },
    "PHE": {
     "ca1": 13,
     "ca2": 12,
     "exam": 35,
     "total": 60,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": [
    {
     "role": "Teacher",
     "author": "Mrs. Grace Danladi",
     "text": "Shows strong improvement in class participation this term.",
     "date": "2026-08-11"
    }
   ]
  },
  {
   "id": "S012",
   "name": "Faruk Adamu",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 9,
     "exam": 31,
     "total": 52,
     "grade": "D"
    },
    "English Language": {
     "ca1": 19,
     "ca2": 16,
     "exam": 34,
     "total": 69,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 12,
     "ca2": 12,
     "exam": 38,
     "total": 62,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 19,
     "ca2": 13,
     "exam": 38,
     "total": 70,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 18,
     "ca2": 18,
     "exam": 41,
     "total": 77,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 16,
     "ca2": 15,
     "exam": 41,
     "total": 72,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 9,
     "exam": 52,
     "total": 69,
     "grade": "B"
    },
    "PHE": {
     "ca1": 12,
     "ca2": 8,
     "exam": 25,
     "total": 45,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S013",
   "name": "Isaac Yusuf",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 19,
     "exam": 34,
     "total": 62,
     "grade": "C"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 8,
     "exam": 48,
     "total": 72,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 17,
     "ca2": 16,
     "exam": 34,
     "total": 67,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 14,
     "ca2": 10,
     "exam": 27,
     "total": 51,
     "grade": "D"
    },
    "Computer Studies": {
     "ca1": 12,
     "ca2": 13,
     "exam": 27,
     "total": 52,
     "grade": "D"
    },
    "Agricultural Science": {
     "ca1": 13,
     "ca2": 11,
     "exam": 40,
     "total": 64,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 9,
     "exam": 47,
     "total": 74,
     "grade": "B"
    },
    "PHE": {
     "ca1": 20,
     "ca2": 16,
     "exam": 51,
     "total": 87,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S014",
   "name": "Zainab Zakari",
   "gender": "F",
   "age": 11,
   "class": "JSS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 20,
     "ca2": 14,
     "exam": 40,
     "total": 74,
     "grade": "B"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 10,
     "exam": 31,
     "total": 53,
     "grade": "D"
    },
    "Basic Science": {
     "ca1": 14,
     "ca2": 8,
     "exam": 55,
     "total": 77,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 11,
     "ca2": 11,
     "exam": 54,
     "total": 76,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 13,
     "ca2": 12,
     "exam": 39,
     "total": 64,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 11,
     "ca2": 8,
     "exam": 37,
     "total": 56,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 14,
     "ca2": 13,
     "exam": 42,
     "total": 69,
     "grade": "B"
    },
    "PHE": {
     "ca1": 9,
     "ca2": 20,
     "exam": 42,
     "total": 71,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S015",
   "name": "Esther Michael",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 17,
     "ca2": 12,
     "exam": 27,
     "total": 56,
     "grade": "C"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 17,
     "exam": 52,
     "total": 78,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 13,
     "ca2": 19,
     "exam": 45,
     "total": 77,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 14,
     "ca2": 17,
     "exam": 57,
     "total": 88,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 9,
     "ca2": 14,
     "exam": 37,
     "total": 60,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 12,
     "ca2": 8,
     "exam": 52,
     "total": 72,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 16,
     "exam": 59,
     "total": 83,
     "grade": "A"
    },
    "PHE": {
     "ca1": 18,
     "ca2": 19,
     "exam": 37,
     "total": 74,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 87,
   "comments": []
  },
  {
   "id": "S016",
   "name": "Nuhu Thomas",
   "gender": "M",
   "age": 11,
   "class": "JSS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 14,
     "exam": 45,
     "total": 77,
     "grade": "A"
    },
    "English Language": {
     "ca1": 14,
     "ca2": 19,
     "exam": 43,
     "total": 76,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 16,
     "ca2": 10,
     "exam": 37,
     "total": 63,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 14,
     "ca2": 18,
     "exam": 49,
     "total": 81,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 18,
     "ca2": 19,
     "exam": 36,
     "total": 73,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 17,
     "ca2": 17,
     "exam": 44,
     "total": 78,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 14,
     "ca2": 16,
     "exam": 25,
     "total": 55,
     "grade": "C"
    },
    "PHE": {
     "ca1": 12,
     "ca2": 12,
     "exam": 38,
     "total": 62,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 90,
   "comments": []
  },
  {
   "id": "S017",
   "name": "Isaac Sunday",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 9,
     "exam": 43,
     "total": 70,
     "grade": "B"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 18,
     "exam": 46,
     "total": 80,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 9,
     "ca2": 20,
     "exam": 40,
     "total": 69,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 18,
     "ca2": 12,
     "exam": 39,
     "total": 69,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 20,
     "ca2": 11,
     "exam": 34,
     "total": 65,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 8,
     "ca2": 8,
     "exam": 40,
     "total": 56,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 15,
     "ca2": 17,
     "exam": 29,
     "total": 61,
     "grade": "C"
    },
    "PHE": {
     "ca1": 15,
     "ca2": 14,
     "exam": 37,
     "total": 66,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S018",
   "name": "Fatima Gambo",
   "gender": "F",
   "age": 11,
   "class": "JSS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 11,
     "ca2": 10,
     "exam": 58,
     "total": 79,
     "grade": "A"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 8,
     "exam": 60,
     "total": 83,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 11,
     "ca2": 9,
     "exam": 54,
     "total": 74,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 10,
     "ca2": 20,
     "exam": 54,
     "total": 84,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 18,
     "ca2": 16,
     "exam": 60,
     "total": 94,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 17,
     "ca2": 13,
     "exam": 53,
     "total": 83,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 17,
     "ca2": 19,
     "exam": 57,
     "total": 93,
     "grade": "A"
    },
    "PHE": {
     "ca1": 14,
     "ca2": 16,
     "exam": 53,
     "total": 83,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 92,
   "comments": [
    {
     "role": "Teacher",
     "author": "Mr. Ibrahim Sule",
     "text": "Needs to submit assignments on time; ability is not in question.",
     "date": "2026-08-12"
    }
   ]
  },
  {
   "id": "S019",
   "name": "Mary Sunday",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 15,
     "exam": 29,
     "total": 56,
     "grade": "C"
    },
    "English Language": {
     "ca1": 19,
     "ca2": 12,
     "exam": 40,
     "total": 71,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 12,
     "ca2": 13,
     "exam": 45,
     "total": 70,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 16,
     "ca2": 9,
     "exam": 33,
     "total": 58,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 10,
     "ca2": 11,
     "exam": 49,
     "total": 70,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 19,
     "ca2": 10,
     "exam": 38,
     "total": 67,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 9,
     "ca2": 14,
     "exam": 51,
     "total": 74,
     "grade": "B"
    },
    "PHE": {
     "ca1": 13,
     "ca2": 16,
     "exam": 54,
     "total": 83,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Outstanding",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S020",
   "name": "Lawal Gambo",
   "gender": "M",
   "age": 11,
   "class": "JSS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 15,
     "ca2": 8,
     "exam": 47,
     "total": 70,
     "grade": "B"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 20,
     "exam": 49,
     "total": 81,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 14,
     "ca2": 16,
     "exam": 59,
     "total": 89,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 20,
     "ca2": 17,
     "exam": 39,
     "total": 76,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 15,
     "ca2": 11,
     "exam": 42,
     "total": 68,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 14,
     "ca2": 15,
     "exam": 26,
     "total": 55,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 14,
     "ca2": 13,
     "exam": 50,
     "total": 77,
     "grade": "A"
    },
    "PHE": {
     "ca1": 19,
     "ca2": 10,
     "exam": 54,
     "total": 83,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S021",
   "name": "Emmanuel Bala",
   "gender": "M",
   "age": 11,
   "class": "JSS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 15,
     "exam": 36,
     "total": 61,
     "grade": "C"
    },
    "English Language": {
     "ca1": 8,
     "ca2": 12,
     "exam": 49,
     "total": 69,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 13,
     "ca2": 11,
     "exam": 54,
     "total": 78,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 13,
     "exam": 49,
     "total": 75,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 12,
     "ca2": 20,
     "exam": 51,
     "total": 83,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 12,
     "ca2": 9,
     "exam": 55,
     "total": 76,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 19,
     "exam": 59,
     "total": 86,
     "grade": "A"
    },
    "PHE": {
     "ca1": 8,
     "ca2": 13,
     "exam": 39,
     "total": 60,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S022",
   "name": "Safiya Waziri",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 15,
     "exam": 32,
     "total": 57,
     "grade": "C"
    },
    "English Language": {
     "ca1": 17,
     "ca2": 11,
     "exam": 54,
     "total": 82,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 19,
     "ca2": 12,
     "exam": 48,
     "total": 79,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 10,
     "ca2": 17,
     "exam": 32,
     "total": 59,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 20,
     "ca2": 10,
     "exam": 44,
     "total": 74,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 9,
     "ca2": 17,
     "exam": 26,
     "total": 52,
     "grade": "D"
    },
    "CRS/IRS": {
     "ca1": 12,
     "ca2": 17,
     "exam": 49,
     "total": 78,
     "grade": "A"
    },
    "PHE": {
     "ca1": 14,
     "ca2": 19,
     "exam": 37,
     "total": 70,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S023",
   "name": "Naomi Usman",
   "gender": "F",
   "age": 10,
   "class": "JSS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 20,
     "ca2": 17,
     "exam": 27,
     "total": 64,
     "grade": "C"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 16,
     "exam": 52,
     "total": 81,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 18,
     "ca2": 13,
     "exam": 29,
     "total": 60,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 16,
     "ca2": 18,
     "exam": 46,
     "total": 80,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 14,
     "exam": 56,
     "total": 78,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 9,
     "ca2": 14,
     "exam": 48,
     "total": 71,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 15,
     "exam": 34,
     "total": 67,
     "grade": "B"
    },
    "PHE": {
     "ca1": 14,
     "ca2": 10,
     "exam": 58,
     "total": 82,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 92,
   "comments": []
  },
  {
   "id": "S024",
   "name": "Suleiman Peters",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 15,
     "exam": 40,
     "total": 67,
     "grade": "B"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 15,
     "exam": 49,
     "total": 84,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 13,
     "ca2": 8,
     "exam": 56,
     "total": 77,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 10,
     "exam": 56,
     "total": 79,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 11,
     "ca2": 13,
     "exam": 41,
     "total": 65,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 13,
     "ca2": 12,
     "exam": 42,
     "total": 67,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 16,
     "ca2": 8,
     "exam": 58,
     "total": 82,
     "grade": "A"
    },
    "PHE": {
     "ca1": 11,
     "ca2": 9,
     "exam": 40,
     "total": 60,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S025",
   "name": "Victor Yusuf",
   "gender": "M",
   "age": 10,
   "class": "JSS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 11,
     "exam": 50,
     "total": 73,
     "grade": "B"
    },
    "English Language": {
     "ca1": 19,
     "ca2": 11,
     "exam": 44,
     "total": 74,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 18,
     "ca2": 17,
     "exam": 48,
     "total": 83,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 15,
     "ca2": 16,
     "exam": 58,
     "total": 89,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 13,
     "ca2": 14,
     "exam": 60,
     "total": 87,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 13,
     "ca2": 13,
     "exam": 54,
     "total": 80,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 12,
     "ca2": 12,
     "exam": 41,
     "total": 65,
     "grade": "B"
    },
    "PHE": {
     "ca1": 11,
     "ca2": 9,
     "exam": 37,
     "total": 57,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S026",
   "name": "Amina Zakari",
   "gender": "F",
   "age": 12,
   "class": "JSS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 11,
     "exam": 43,
     "total": 63,
     "grade": "C"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 13,
     "exam": 36,
     "total": 60,
     "grade": "C"
    },
    "Basic Science": {
     "ca1": 12,
     "ca2": 8,
     "exam": 59,
     "total": 79,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 10,
     "ca2": 12,
     "exam": 27,
     "total": 49,
     "grade": "D"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 16,
     "exam": 43,
     "total": 67,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 19,
     "ca2": 10,
     "exam": 56,
     "total": 85,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 9,
     "ca2": 8,
     "exam": 43,
     "total": 60,
     "grade": "C"
    },
    "PHE": {
     "ca1": 15,
     "ca2": 15,
     "exam": 53,
     "total": 83,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S027",
   "name": "Patience Mustapha",
   "gender": "F",
   "age": 11,
   "class": "JSS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 10,
     "exam": 44,
     "total": 64,
     "grade": "C"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 11,
     "exam": 32,
     "total": 52,
     "grade": "D"
    },
    "Basic Science": {
     "ca1": 16,
     "ca2": 20,
     "exam": 51,
     "total": 87,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 17,
     "ca2": 17,
     "exam": 39,
     "total": 73,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 20,
     "ca2": 16,
     "exam": 49,
     "total": 85,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 15,
     "ca2": 15,
     "exam": 44,
     "total": 74,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 17,
     "ca2": 14,
     "exam": 44,
     "total": 75,
     "grade": "A"
    },
    "PHE": {
     "ca1": 17,
     "ca2": 17,
     "exam": 28,
     "total": 62,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 86,
   "comments": []
  },
  {
   "id": "S028",
   "name": "Musa Peters",
   "gender": "M",
   "age": 11,
   "class": "JSS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 9,
     "exam": 35,
     "total": 60,
     "grade": "C"
    },
    "English Language": {
     "ca1": 8,
     "ca2": 14,
     "exam": 53,
     "total": 75,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 19,
     "ca2": 17,
     "exam": 55,
     "total": 91,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 12,
     "ca2": 8,
     "exam": 39,
     "total": 59,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 12,
     "ca2": 19,
     "exam": 43,
     "total": 74,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 19,
     "ca2": 15,
     "exam": 29,
     "total": 63,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 11,
     "exam": 41,
     "total": 70,
     "grade": "B"
    },
    "PHE": {
     "ca1": 20,
     "ca2": 20,
     "exam": 37,
     "total": 77,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 88,
   "comments": []
  },
  {
   "id": "S029",
   "name": "Emmanuel Danladi",
   "gender": "M",
   "age": 11,
   "class": "JSS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 20,
     "ca2": 12,
     "exam": 43,
     "total": 75,
     "grade": "A"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 9,
     "exam": 54,
     "total": 78,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 19,
     "ca2": 12,
     "exam": 50,
     "total": 81,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 12,
     "ca2": 16,
     "exam": 59,
     "total": 87,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 15,
     "ca2": 15,
     "exam": 30,
     "total": 60,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 17,
     "ca2": 8,
     "exam": 52,
     "total": 77,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 19,
     "ca2": 13,
     "exam": 41,
     "total": 73,
     "grade": "B"
    },
    "PHE": {
     "ca1": 8,
     "ca2": 9,
     "exam": 39,
     "total": 56,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 89,
   "comments": []
  },
  {
   "id": "S030",
   "name": "Khadija Joseph",
   "gender": "F",
   "age": 12,
   "class": "JSS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 10,
     "exam": 52,
     "total": 74,
     "grade": "B"
    },
    "English Language": {
     "ca1": 18,
     "ca2": 15,
     "exam": 30,
     "total": 63,
     "grade": "C"
    },
    "Basic Science": {
     "ca1": 15,
     "ca2": 13,
     "exam": 51,
     "total": 79,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 13,
     "exam": 31,
     "total": 57,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 10,
     "ca2": 13,
     "exam": 51,
     "total": 74,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 19,
     "ca2": 15,
     "exam": 43,
     "total": 77,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 14,
     "exam": 60,
     "total": 92,
     "grade": "A"
    },
    "PHE": {
     "ca1": 8,
     "ca2": 15,
     "exam": 30,
     "total": 53,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Part-paid",
   "attendance": 84,
   "comments": [
    {
     "role": "Admin",
     "author": "Mrs. Aisha Bello (Admin)",
     "text": "Flagged for outstanding balance follow-up with the family.",
     "date": "2026-08-14"
    }
   ]
  },
  {
   "id": "S031",
   "name": "Naomi Andrew",
   "gender": "F",
   "age": 12,
   "class": "JSS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 8,
     "exam": 37,
     "total": 59,
     "grade": "C"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 13,
     "exam": 56,
     "total": 85,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 18,
     "ca2": 15,
     "exam": 28,
     "total": 61,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 11,
     "ca2": 12,
     "exam": 60,
     "total": 83,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 10,
     "ca2": 12,
     "exam": 53,
     "total": 75,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 19,
     "ca2": 15,
     "exam": 32,
     "total": 66,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 18,
     "exam": 40,
     "total": 66,
     "grade": "B"
    },
    "PHE": {
     "ca1": 19,
     "ca2": 10,
     "exam": 44,
     "total": 73,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Outstanding",
   "attendance": 87,
   "comments": []
  },
  {
   "id": "S032",
   "name": "Bello Adamu",
   "gender": "M",
   "age": 11,
   "class": "JSS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 15,
     "ca2": 19,
     "exam": 43,
     "total": 77,
     "grade": "A"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 19,
     "exam": 42,
     "total": 77,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 14,
     "ca2": 15,
     "exam": 55,
     "total": 84,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 11,
     "ca2": 15,
     "exam": 60,
     "total": 86,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 10,
     "ca2": 14,
     "exam": 37,
     "total": 61,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 17,
     "ca2": 16,
     "exam": 33,
     "total": 66,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 9,
     "ca2": 12,
     "exam": 51,
     "total": 72,
     "grade": "B"
    },
    "PHE": {
     "ca1": 13,
     "ca2": 20,
     "exam": 57,
     "total": 90,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S033",
   "name": "Samuel Yakubu",
   "gender": "M",
   "age": 12,
   "class": "JSS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 13,
     "ca2": 13,
     "exam": 60,
     "total": 86,
     "grade": "A"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 16,
     "exam": 49,
     "total": 85,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 15,
     "ca2": 13,
     "exam": 37,
     "total": 65,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 19,
     "ca2": 11,
     "exam": 49,
     "total": 79,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 11,
     "ca2": 20,
     "exam": 51,
     "total": 82,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 8,
     "ca2": 13,
     "exam": 55,
     "total": 76,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 19,
     "ca2": 20,
     "exam": 49,
     "total": 88,
     "grade": "A"
    },
    "PHE": {
     "ca1": 14,
     "ca2": 18,
     "exam": 34,
     "total": 66,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Part-paid",
   "attendance": 98,
   "comments": []
  },
  {
   "id": "S034",
   "name": "Fatima Joseph",
   "gender": "F",
   "age": 12,
   "class": "JSS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 8,
     "ca2": 19,
     "exam": 34,
     "total": 61,
     "grade": "C"
    },
    "English Language": {
     "ca1": 14,
     "ca2": 18,
     "exam": 34,
     "total": 66,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 9,
     "ca2": 15,
     "exam": 41,
     "total": 65,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 17,
     "exam": 50,
     "total": 80,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 18,
     "ca2": 9,
     "exam": 46,
     "total": 73,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 18,
     "ca2": 16,
     "exam": 49,
     "total": 83,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 13,
     "ca2": 18,
     "exam": 56,
     "total": 87,
     "grade": "A"
    },
    "PHE": {
     "ca1": 16,
     "ca2": 8,
     "exam": 29,
     "total": 53,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 87,
   "comments": []
  },
  {
   "id": "S035",
   "name": "Naomi Wakili",
   "gender": "F",
   "age": 11,
   "class": "JSS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 15,
     "ca2": 10,
     "exam": 44,
     "total": 69,
     "grade": "B"
    },
    "English Language": {
     "ca1": 8,
     "ca2": 8,
     "exam": 45,
     "total": 61,
     "grade": "C"
    },
    "Basic Science": {
     "ca1": 20,
     "ca2": 8,
     "exam": 43,
     "total": 71,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 13,
     "exam": 52,
     "total": 78,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 10,
     "ca2": 11,
     "exam": 58,
     "total": 79,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 14,
     "ca2": 17,
     "exam": 36,
     "total": 67,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 10,
     "ca2": 10,
     "exam": 30,
     "total": 50,
     "grade": "D"
    },
    "PHE": {
     "ca1": 17,
     "ca2": 14,
     "exam": 40,
     "total": 71,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 92,
   "comments": []
  },
  {
   "id": "S036",
   "name": "Faruk Yusuf",
   "gender": "M",
   "age": 12,
   "class": "JSS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 18,
     "exam": 59,
     "total": 89,
     "grade": "A"
    },
    "English Language": {
     "ca1": 10,
     "ca2": 9,
     "exam": 53,
     "total": 72,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 13,
     "ca2": 17,
     "exam": 44,
     "total": 74,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 18,
     "ca2": 14,
     "exam": 41,
     "total": 73,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 15,
     "ca2": 12,
     "exam": 37,
     "total": 64,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 14,
     "ca2": 15,
     "exam": 31,
     "total": 60,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 11,
     "ca2": 14,
     "exam": 47,
     "total": 72,
     "grade": "B"
    },
    "PHE": {
     "ca1": 17,
     "ca2": 12,
     "exam": 43,
     "total": 72,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Part-paid",
   "attendance": 85,
   "comments": []
  },
  {
   "id": "S037",
   "name": "Caleb Zakari",
   "gender": "M",
   "age": 12,
   "class": "JSS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 20,
     "exam": 39,
     "total": 71,
     "grade": "B"
    },
    "English Language": {
     "ca1": 17,
     "ca2": 20,
     "exam": 47,
     "total": 84,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 11,
     "ca2": 18,
     "exam": 37,
     "total": 66,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 17,
     "ca2": 12,
     "exam": 33,
     "total": 62,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 18,
     "ca2": 9,
     "exam": 27,
     "total": 54,
     "grade": "D"
    },
    "Agricultural Science": {
     "ca1": 12,
     "ca2": 20,
     "exam": 53,
     "total": 85,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 17,
     "exam": 48,
     "total": 73,
     "grade": "B"
    },
    "PHE": {
     "ca1": 19,
     "ca2": 10,
     "exam": 30,
     "total": 59,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 95,
   "comments": []
  },
  {
   "id": "S038",
   "name": "Rukayya Joseph",
   "gender": "F",
   "age": 12,
   "class": "JSS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 12,
     "exam": 55,
     "total": 77,
     "grade": "A"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 12,
     "exam": 46,
     "total": 78,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 20,
     "ca2": 9,
     "exam": 54,
     "total": 83,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 9,
     "ca2": 10,
     "exam": 39,
     "total": 58,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 18,
     "ca2": 19,
     "exam": 50,
     "total": 87,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 20,
     "ca2": 16,
     "exam": 48,
     "total": 84,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 9,
     "ca2": 20,
     "exam": 50,
     "total": 79,
     "grade": "A"
    },
    "PHE": {
     "ca1": 8,
     "ca2": 12,
     "exam": 59,
     "total": 79,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 4,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S039",
   "name": "Naomi Haruna",
   "gender": "F",
   "age": 11,
   "class": "JSS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 11,
     "exam": 55,
     "total": 84,
     "grade": "A"
    },
    "English Language": {
     "ca1": 8,
     "ca2": 17,
     "exam": 60,
     "total": 85,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 13,
     "ca2": 17,
     "exam": 39,
     "total": 69,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 18,
     "ca2": 9,
     "exam": 54,
     "total": 81,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 19,
     "ca2": 12,
     "exam": 51,
     "total": 82,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 9,
     "ca2": 10,
     "exam": 27,
     "total": 46,
     "grade": "D"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 12,
     "exam": 56,
     "total": 76,
     "grade": "A"
    },
    "PHE": {
     "ca1": 9,
     "ca2": 9,
     "exam": 40,
     "total": 58,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Outstanding",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S040",
   "name": "Auwal Zakari",
   "gender": "M",
   "age": 11,
   "class": "JSS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 18,
     "exam": 31,
     "total": 63,
     "grade": "C"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 17,
     "exam": 51,
     "total": 83,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 12,
     "ca2": 8,
     "exam": 48,
     "total": 68,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 11,
     "ca2": 15,
     "exam": 53,
     "total": 79,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 11,
     "ca2": 13,
     "exam": 31,
     "total": 55,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 18,
     "ca2": 13,
     "exam": 59,
     "total": 90,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 13,
     "exam": 28,
     "total": 59,
     "grade": "C"
    },
    "PHE": {
     "ca1": 14,
     "ca2": 12,
     "exam": 37,
     "total": 63,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S041",
   "name": "David Emmanuel",
   "gender": "M",
   "age": 11,
   "class": "JSS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 20,
     "exam": 38,
     "total": 68,
     "grade": "B"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 20,
     "exam": 60,
     "total": 89,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 11,
     "ca2": 17,
     "exam": 38,
     "total": 66,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 11,
     "ca2": 13,
     "exam": 34,
     "total": 58,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 20,
     "ca2": 17,
     "exam": 25,
     "total": 62,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 12,
     "ca2": 10,
     "exam": 33,
     "total": 55,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 16,
     "ca2": 12,
     "exam": 36,
     "total": 64,
     "grade": "C"
    },
    "PHE": {
     "ca1": 9,
     "ca2": 18,
     "exam": 26,
     "total": 53,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 92,
   "comments": []
  },
  {
   "id": "S042",
   "name": "Aisha Waziri",
   "gender": "F",
   "age": 12,
   "class": "JSS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 9,
     "exam": 29,
     "total": 54,
     "grade": "D"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 15,
     "exam": 48,
     "total": 78,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 16,
     "ca2": 17,
     "exam": 31,
     "total": 64,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 15,
     "ca2": 16,
     "exam": 39,
     "total": 70,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 17,
     "ca2": 8,
     "exam": 58,
     "total": 83,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 12,
     "ca2": 15,
     "exam": 26,
     "total": 53,
     "grade": "D"
    },
    "CRS/IRS": {
     "ca1": 8,
     "ca2": 15,
     "exam": 50,
     "total": 73,
     "grade": "B"
    },
    "PHE": {
     "ca1": 14,
     "ca2": 18,
     "exam": 31,
     "total": 63,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 86,
   "comments": []
  },
  {
   "id": "S043",
   "name": "Ruth Michael",
   "gender": "F",
   "age": 12,
   "class": "JSS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 17,
     "exam": 58,
     "total": 89,
     "grade": "A"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 15,
     "exam": 57,
     "total": 84,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 17,
     "ca2": 14,
     "exam": 31,
     "total": 62,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 20,
     "ca2": 19,
     "exam": 32,
     "total": 71,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 18,
     "ca2": 18,
     "exam": 60,
     "total": 96,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 19,
     "ca2": 11,
     "exam": 52,
     "total": 82,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 15,
     "ca2": 11,
     "exam": 51,
     "total": 77,
     "grade": "A"
    },
    "PHE": {
     "ca1": 13,
     "ca2": 15,
     "exam": 50,
     "total": 78,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 95,
   "comments": []
  },
  {
   "id": "S044",
   "name": "Musa Ishaya",
   "gender": "M",
   "age": 12,
   "class": "JSS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 9,
     "exam": 30,
     "total": 48,
     "grade": "D"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 14,
     "exam": 31,
     "total": 54,
     "grade": "D"
    },
    "Basic Science": {
     "ca1": 19,
     "ca2": 19,
     "exam": 48,
     "total": 86,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 20,
     "ca2": 10,
     "exam": 60,
     "total": 90,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 17,
     "exam": 60,
     "total": 85,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 16,
     "ca2": 13,
     "exam": 32,
     "total": 61,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 14,
     "ca2": 13,
     "exam": 52,
     "total": 79,
     "grade": "A"
    },
    "PHE": {
     "ca1": 19,
     "ca2": 8,
     "exam": 43,
     "total": 70,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": [
    {
     "role": "Parent",
     "author": "Parent/Guardian",
     "text": "Thank you for the support — we've noticed more confidence at home.",
     "date": "2026-08-13"
    }
   ]
  },
  {
   "id": "S045",
   "name": "Daniel Adamu",
   "gender": "M",
   "age": 12,
   "class": "JSS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 13,
     "exam": 32,
     "total": 61,
     "grade": "C"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 12,
     "exam": 39,
     "total": 71,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 20,
     "ca2": 14,
     "exam": 60,
     "total": 94,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 20,
     "ca2": 17,
     "exam": 60,
     "total": 97,
     "grade": "A"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 17,
     "exam": 42,
     "total": 67,
     "grade": "B"
    },
    "Agricultural Science": {
     "ca1": 8,
     "ca2": 10,
     "exam": 42,
     "total": 60,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 19,
     "ca2": 20,
     "exam": 44,
     "total": 83,
     "grade": "A"
    },
    "PHE": {
     "ca1": 13,
     "ca2": 13,
     "exam": 25,
     "total": 51,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S046",
   "name": "Fatima Zakari",
   "gender": "F",
   "age": 11,
   "class": "JSS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 14,
     "exam": 54,
     "total": 82,
     "grade": "A"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 10,
     "exam": 48,
     "total": 71,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 12,
     "ca2": 19,
     "exam": 45,
     "total": 76,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 20,
     "ca2": 17,
     "exam": 30,
     "total": 67,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 10,
     "exam": 35,
     "total": 53,
     "grade": "D"
    },
    "Agricultural Science": {
     "ca1": 20,
     "ca2": 17,
     "exam": 28,
     "total": 65,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 18,
     "ca2": 9,
     "exam": 42,
     "total": 69,
     "grade": "B"
    },
    "PHE": {
     "ca1": 15,
     "ca2": 18,
     "exam": 52,
     "total": 85,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 87,
   "comments": []
  },
  {
   "id": "S047",
   "name": "Blessing Bulus",
   "gender": "F",
   "age": 11,
   "class": "JSS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 18,
     "exam": 56,
     "total": 86,
     "grade": "A"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 18,
     "exam": 44,
     "total": 78,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 8,
     "ca2": 11,
     "exam": 50,
     "total": 69,
     "grade": "B"
    },
    "Social Studies": {
     "ca1": 17,
     "ca2": 8,
     "exam": 25,
     "total": 50,
     "grade": "D"
    },
    "Computer Studies": {
     "ca1": 11,
     "ca2": 12,
     "exam": 38,
     "total": 61,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 20,
     "ca2": 10,
     "exam": 41,
     "total": 71,
     "grade": "B"
    },
    "CRS/IRS": {
     "ca1": 12,
     "ca2": 13,
     "exam": 32,
     "total": 57,
     "grade": "C"
    },
    "PHE": {
     "ca1": 8,
     "ca2": 15,
     "exam": 52,
     "total": 75,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 95,
   "comments": []
  },
  {
   "id": "S048",
   "name": "Ibrahim Musa",
   "gender": "M",
   "age": 11,
   "class": "JSS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 8,
     "exam": 54,
     "total": 76,
     "grade": "A"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 13,
     "exam": 52,
     "total": 74,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 17,
     "ca2": 14,
     "exam": 51,
     "total": 82,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 12,
     "ca2": 9,
     "exam": 50,
     "total": 71,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 8,
     "ca2": 13,
     "exam": 35,
     "total": 56,
     "grade": "C"
    },
    "Agricultural Science": {
     "ca1": 20,
     "ca2": 17,
     "exam": 54,
     "total": 91,
     "grade": "A"
    },
    "CRS/IRS": {
     "ca1": 19,
     "ca2": 13,
     "exam": 30,
     "total": 62,
     "grade": "C"
    },
    "PHE": {
     "ca1": 14,
     "ca2": 9,
     "exam": 40,
     "total": 63,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Part-paid",
   "attendance": 94,
   "comments": []
  },
  {
   "id": "S049",
   "name": "Daniel Emmanuel",
   "gender": "M",
   "age": 11,
   "class": "JSS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 16,
     "exam": 32,
     "total": 57,
     "grade": "C"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 16,
     "exam": 37,
     "total": 69,
     "grade": "B"
    },
    "Basic Science": {
     "ca1": 20,
     "ca2": 13,
     "exam": 47,
     "total": 80,
     "grade": "A"
    },
    "Social Studies": {
     "ca1": 19,
     "ca2": 18,
     "exam": 34,
     "total": 71,
     "grade": "B"
    },
    "Computer Studies": {
     "ca1": 11,
     "ca2": 9,
     "exam": 34,
     "total": 54,
     "grade": "D"
    },
    "Agricultural Science": {
     "ca1": 12,
     "ca2": 11,
     "exam": 36,
     "total": 59,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 17,
     "ca2": 10,
     "exam": 29,
     "total": 56,
     "grade": "C"
    },
    "PHE": {
     "ca1": 10,
     "ca2": 20,
     "exam": 56,
     "total": 86,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 94,
   "comments": []
  },
  {
   "id": "S050",
   "name": "Hadiza Emmanuel",
   "gender": "F",
   "age": 11,
   "class": "JSS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 15,
     "ca2": 9,
     "exam": 55,
     "total": 79,
     "grade": "A"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 18,
     "exam": 44,
     "total": 77,
     "grade": "A"
    },
    "Basic Science": {
     "ca1": 20,
     "ca2": 12,
     "exam": 28,
     "total": 60,
     "grade": "C"
    },
    "Social Studies": {
     "ca1": 13,
     "ca2": 16,
     "exam": 29,
     "total": 58,
     "grade": "C"
    },
    "Computer Studies": {
     "ca1": 12,
     "ca2": 15,
     "exam": 53,
     "total": 80,
     "grade": "A"
    },
    "Agricultural Science": {
     "ca1": 8,
     "ca2": 8,
     "exam": 48,
     "total": 64,
     "grade": "C"
    },
    "CRS/IRS": {
     "ca1": 12,
     "ca2": 9,
     "exam": 30,
     "total": 51,
     "grade": "D"
    },
    "PHE": {
     "ca1": 17,
     "ca2": 17,
     "exam": 57,
     "total": 91,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 90,
   "comments": []
  },
  {
   "id": "S051",
   "name": "Blessing Usman",
   "gender": "F",
   "age": 15,
   "class": "SS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 10,
     "exam": 28,
     "total": 54,
     "grade": "D"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 9,
     "exam": 46,
     "total": 70,
     "grade": "B"
    },
    "Biology": {
     "ca1": 19,
     "ca2": 9,
     "exam": 57,
     "total": 85,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 18,
     "ca2": 10,
     "exam": 27,
     "total": 55,
     "grade": "C"
    },
    "Physics": {
     "ca1": 11,
     "ca2": 19,
     "exam": 53,
     "total": 83,
     "grade": "A"
    },
    "Economics": {
     "ca1": 15,
     "ca2": 16,
     "exam": 58,
     "total": 89,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 17,
     "ca2": 10,
     "exam": 48,
     "total": 75,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 12,
     "exam": 49,
     "total": 74,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 86,
   "comments": []
  },
  {
   "id": "S052",
   "name": "Suleiman Adamu",
   "gender": "M",
   "age": 15,
   "class": "SS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 12,
     "exam": 34,
     "total": 58,
     "grade": "C"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 9,
     "exam": 34,
     "total": 56,
     "grade": "C"
    },
    "Biology": {
     "ca1": 13,
     "ca2": 12,
     "exam": 50,
     "total": 75,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 10,
     "ca2": 17,
     "exam": 30,
     "total": 57,
     "grade": "C"
    },
    "Physics": {
     "ca1": 12,
     "ca2": 16,
     "exam": 49,
     "total": 77,
     "grade": "A"
    },
    "Economics": {
     "ca1": 18,
     "ca2": 20,
     "exam": 46,
     "total": 84,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 18,
     "exam": 58,
     "total": 86,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 9,
     "ca2": 18,
     "exam": 52,
     "total": 79,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Outstanding",
   "attendance": 94,
   "comments": []
  },
  {
   "id": "S053",
   "name": "Victor James",
   "gender": "M",
   "age": 14,
   "class": "SS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 10,
     "exam": 29,
     "total": 49,
     "grade": "D"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 20,
     "exam": 31,
     "total": 63,
     "grade": "C"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 20,
     "exam": 59,
     "total": 95,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 19,
     "ca2": 16,
     "exam": 27,
     "total": 62,
     "grade": "C"
    },
    "Physics": {
     "ca1": 18,
     "ca2": 13,
     "exam": 33,
     "total": 64,
     "grade": "C"
    },
    "Economics": {
     "ca1": 17,
     "ca2": 14,
     "exam": 34,
     "total": 65,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 10,
     "exam": 35,
     "total": 55,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 19,
     "ca2": 15,
     "exam": 27,
     "total": 61,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 98,
   "comments": []
  },
  {
   "id": "S054",
   "name": "Hauwa Andrew",
   "gender": "F",
   "age": 14,
   "class": "SS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 20,
     "exam": 55,
     "total": 87,
     "grade": "A"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 13,
     "exam": 53,
     "total": 77,
     "grade": "A"
    },
    "Biology": {
     "ca1": 15,
     "ca2": 20,
     "exam": 43,
     "total": 78,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 20,
     "ca2": 14,
     "exam": 57,
     "total": 91,
     "grade": "A"
    },
    "Physics": {
     "ca1": 16,
     "ca2": 14,
     "exam": 35,
     "total": 65,
     "grade": "B"
    },
    "Economics": {
     "ca1": 11,
     "ca2": 20,
     "exam": 33,
     "total": 64,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 12,
     "ca2": 8,
     "exam": 55,
     "total": 75,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 16,
     "exam": 31,
     "total": 60,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 88,
   "comments": []
  },
  {
   "id": "S055",
   "name": "Joy Mustapha",
   "gender": "F",
   "age": 14,
   "class": "SS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 15,
     "ca2": 13,
     "exam": 26,
     "total": 54,
     "grade": "D"
    },
    "English Language": {
     "ca1": 14,
     "ca2": 8,
     "exam": 50,
     "total": 72,
     "grade": "B"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 13,
     "exam": 40,
     "total": 69,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 14,
     "ca2": 9,
     "exam": 48,
     "total": 71,
     "grade": "B"
    },
    "Physics": {
     "ca1": 11,
     "ca2": 8,
     "exam": 45,
     "total": 64,
     "grade": "C"
    },
    "Economics": {
     "ca1": 9,
     "ca2": 19,
     "exam": 46,
     "total": 74,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 20,
     "ca2": 10,
     "exam": 33,
     "total": 63,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 8,
     "ca2": 12,
     "exam": 55,
     "total": 75,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 86,
   "comments": []
  },
  {
   "id": "S056",
   "name": "Abubakar Michael",
   "gender": "M",
   "age": 14,
   "class": "SS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 16,
     "exam": 58,
     "total": 84,
     "grade": "A"
    },
    "English Language": {
     "ca1": 14,
     "ca2": 9,
     "exam": 43,
     "total": 66,
     "grade": "B"
    },
    "Biology": {
     "ca1": 11,
     "ca2": 12,
     "exam": 32,
     "total": 55,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 11,
     "exam": 51,
     "total": 70,
     "grade": "B"
    },
    "Physics": {
     "ca1": 18,
     "ca2": 20,
     "exam": 54,
     "total": 92,
     "grade": "A"
    },
    "Economics": {
     "ca1": 9,
     "ca2": 9,
     "exam": 56,
     "total": 74,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 17,
     "ca2": 16,
     "exam": 26,
     "total": 59,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 18,
     "ca2": 16,
     "exam": 40,
     "total": 74,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S057",
   "name": "Samuel Ishaya",
   "gender": "M",
   "age": 14,
   "class": "SS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 13,
     "exam": 29,
     "total": 58,
     "grade": "C"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 16,
     "exam": 57,
     "total": 89,
     "grade": "A"
    },
    "Biology": {
     "ca1": 20,
     "ca2": 16,
     "exam": 60,
     "total": 96,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 14,
     "exam": 55,
     "total": 77,
     "grade": "A"
    },
    "Physics": {
     "ca1": 8,
     "ca2": 18,
     "exam": 49,
     "total": 75,
     "grade": "A"
    },
    "Economics": {
     "ca1": 13,
     "ca2": 12,
     "exam": 26,
     "total": 51,
     "grade": "D"
    },
    "Civic Education": {
     "ca1": 13,
     "ca2": 20,
     "exam": 29,
     "total": 62,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 11,
     "exam": 31,
     "total": 55,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 89,
   "comments": []
  },
  {
   "id": "S058",
   "name": "Hadiza Yakubu",
   "gender": "F",
   "age": 15,
   "class": "SS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 10,
     "exam": 33,
     "total": 61,
     "grade": "C"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 19,
     "exam": 54,
     "total": 82,
     "grade": "A"
    },
    "Biology": {
     "ca1": 8,
     "ca2": 12,
     "exam": 37,
     "total": 57,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 20,
     "exam": 37,
     "total": 65,
     "grade": "B"
    },
    "Physics": {
     "ca1": 8,
     "ca2": 13,
     "exam": 44,
     "total": 65,
     "grade": "B"
    },
    "Economics": {
     "ca1": 16,
     "ca2": 14,
     "exam": 59,
     "total": 89,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 15,
     "ca2": 12,
     "exam": 27,
     "total": 54,
     "grade": "D"
    },
    "Literature-in-English": {
     "ca1": 20,
     "ca2": 18,
     "exam": 37,
     "total": 75,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 95,
   "comments": []
  },
  {
   "id": "S059",
   "name": "Joy Musa",
   "gender": "F",
   "age": 15,
   "class": "SS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 13,
     "exam": 36,
     "total": 63,
     "grade": "C"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 19,
     "exam": 56,
     "total": 90,
     "grade": "A"
    },
    "Biology": {
     "ca1": 13,
     "ca2": 20,
     "exam": 58,
     "total": 91,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 12,
     "ca2": 20,
     "exam": 30,
     "total": 62,
     "grade": "C"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 14,
     "exam": 30,
     "total": 63,
     "grade": "C"
    },
    "Economics": {
     "ca1": 14,
     "ca2": 17,
     "exam": 36,
     "total": 67,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 16,
     "ca2": 12,
     "exam": 45,
     "total": 73,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 9,
     "ca2": 9,
     "exam": 45,
     "total": 63,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 98,
   "comments": []
  },
  {
   "id": "S060",
   "name": "Suleiman Yakubu",
   "gender": "M",
   "age": 14,
   "class": "SS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 19,
     "ca2": 13,
     "exam": 52,
     "total": 84,
     "grade": "A"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 18,
     "exam": 28,
     "total": 58,
     "grade": "C"
    },
    "Biology": {
     "ca1": 9,
     "ca2": 18,
     "exam": 50,
     "total": 77,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 13,
     "ca2": 16,
     "exam": 35,
     "total": 64,
     "grade": "C"
    },
    "Physics": {
     "ca1": 8,
     "ca2": 10,
     "exam": 53,
     "total": 71,
     "grade": "B"
    },
    "Economics": {
     "ca1": 8,
     "ca2": 10,
     "exam": 29,
     "total": 47,
     "grade": "D"
    },
    "Civic Education": {
     "ca1": 11,
     "ca2": 20,
     "exam": 48,
     "total": 79,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 14,
     "exam": 27,
     "total": 54,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 86,
   "comments": []
  },
  {
   "id": "S061",
   "name": "Caleb Waziri",
   "gender": "M",
   "age": 15,
   "class": "SS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 13,
     "exam": 42,
     "total": 69,
     "grade": "B"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 9,
     "exam": 26,
     "total": 46,
     "grade": "D"
    },
    "Biology": {
     "ca1": 19,
     "ca2": 10,
     "exam": 56,
     "total": 85,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 16,
     "ca2": 14,
     "exam": 60,
     "total": 90,
     "grade": "A"
    },
    "Physics": {
     "ca1": 9,
     "ca2": 12,
     "exam": 41,
     "total": 62,
     "grade": "C"
    },
    "Economics": {
     "ca1": 19,
     "ca2": 15,
     "exam": 38,
     "total": 72,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 17,
     "ca2": 12,
     "exam": 56,
     "total": 85,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 11,
     "ca2": 9,
     "exam": 33,
     "total": 53,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 94,
   "comments": []
  },
  {
   "id": "S062",
   "name": "Hadiza Haruna",
   "gender": "F",
   "age": 14,
   "class": "SS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 16,
     "exam": 43,
     "total": 75,
     "grade": "A"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 10,
     "exam": 36,
     "total": 58,
     "grade": "C"
    },
    "Biology": {
     "ca1": 20,
     "ca2": 13,
     "exam": 57,
     "total": 90,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 11,
     "ca2": 9,
     "exam": 37,
     "total": 57,
     "grade": "C"
    },
    "Physics": {
     "ca1": 20,
     "ca2": 10,
     "exam": 40,
     "total": 70,
     "grade": "B"
    },
    "Economics": {
     "ca1": 20,
     "ca2": 15,
     "exam": 26,
     "total": 61,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 13,
     "ca2": 16,
     "exam": 48,
     "total": 77,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 15,
     "ca2": 20,
     "exam": 60,
     "total": 95,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Outstanding",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S063",
   "name": "Mary Bulus",
   "gender": "F",
   "age": 15,
   "class": "SS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 17,
     "ca2": 9,
     "exam": 33,
     "total": 59,
     "grade": "C"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 18,
     "exam": 29,
     "total": 60,
     "grade": "C"
    },
    "Biology": {
     "ca1": 15,
     "ca2": 15,
     "exam": 58,
     "total": 88,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 13,
     "ca2": 10,
     "exam": 60,
     "total": 83,
     "grade": "A"
    },
    "Physics": {
     "ca1": 18,
     "ca2": 17,
     "exam": 36,
     "total": 71,
     "grade": "B"
    },
    "Economics": {
     "ca1": 20,
     "ca2": 10,
     "exam": 52,
     "total": 82,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 16,
     "ca2": 8,
     "exam": 32,
     "total": 56,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 16,
     "ca2": 10,
     "exam": 44,
     "total": 70,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Outstanding",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S064",
   "name": "Lawal Mustapha",
   "gender": "M",
   "age": 15,
   "class": "SS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 11,
     "ca2": 18,
     "exam": 60,
     "total": 89,
     "grade": "A"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 10,
     "exam": 44,
     "total": 66,
     "grade": "B"
    },
    "Biology": {
     "ca1": 17,
     "ca2": 16,
     "exam": 30,
     "total": 63,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 16,
     "ca2": 18,
     "exam": 35,
     "total": 69,
     "grade": "B"
    },
    "Physics": {
     "ca1": 17,
     "ca2": 17,
     "exam": 34,
     "total": 68,
     "grade": "B"
    },
    "Economics": {
     "ca1": 10,
     "ca2": 18,
     "exam": 46,
     "total": 74,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 17,
     "ca2": 8,
     "exam": 26,
     "total": 51,
     "grade": "D"
    },
    "Literature-in-English": {
     "ca1": 9,
     "ca2": 8,
     "exam": 41,
     "total": 58,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S065",
   "name": "Timothy Thomas",
   "gender": "M",
   "age": 15,
   "class": "SS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 11,
     "ca2": 20,
     "exam": 50,
     "total": 81,
     "grade": "A"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 15,
     "exam": 29,
     "total": 56,
     "grade": "C"
    },
    "Biology": {
     "ca1": 19,
     "ca2": 8,
     "exam": 35,
     "total": 62,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 15,
     "ca2": 14,
     "exam": 55,
     "total": 84,
     "grade": "A"
    },
    "Physics": {
     "ca1": 15,
     "ca2": 11,
     "exam": 46,
     "total": 72,
     "grade": "B"
    },
    "Economics": {
     "ca1": 17,
     "ca2": 10,
     "exam": 45,
     "total": 72,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 19,
     "ca2": 13,
     "exam": 47,
     "total": 79,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 14,
     "ca2": 10,
     "exam": 48,
     "total": 72,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 98,
   "comments": []
  },
  {
   "id": "S066",
   "name": "Hauwa Waziri",
   "gender": "F",
   "age": 14,
   "class": "SS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 8,
     "ca2": 12,
     "exam": 49,
     "total": 69,
     "grade": "B"
    },
    "English Language": {
     "ca1": 17,
     "ca2": 14,
     "exam": 40,
     "total": 71,
     "grade": "B"
    },
    "Biology": {
     "ca1": 10,
     "ca2": 13,
     "exam": 45,
     "total": 68,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 11,
     "ca2": 20,
     "exam": 35,
     "total": 66,
     "grade": "B"
    },
    "Physics": {
     "ca1": 15,
     "ca2": 16,
     "exam": 54,
     "total": 85,
     "grade": "A"
    },
    "Economics": {
     "ca1": 15,
     "ca2": 12,
     "exam": 56,
     "total": 83,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 8,
     "ca2": 9,
     "exam": 50,
     "total": 67,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 16,
     "ca2": 15,
     "exam": 40,
     "total": 71,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": [
    {
     "role": "Parent",
     "author": "Parent/Guardian",
     "text": "Please can extra reading materials be recommended for the holidays?",
     "date": "2026-08-16"
    }
   ]
  },
  {
   "id": "S067",
   "name": "Comfort Andrew",
   "gender": "F",
   "age": 14,
   "class": "SS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 14,
     "exam": 33,
     "total": 56,
     "grade": "C"
    },
    "English Language": {
     "ca1": 12,
     "ca2": 19,
     "exam": 48,
     "total": 79,
     "grade": "A"
    },
    "Biology": {
     "ca1": 20,
     "ca2": 14,
     "exam": 48,
     "total": 82,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 14,
     "exam": 28,
     "total": 50,
     "grade": "D"
    },
    "Physics": {
     "ca1": 17,
     "ca2": 16,
     "exam": 37,
     "total": 70,
     "grade": "B"
    },
    "Economics": {
     "ca1": 13,
     "ca2": 16,
     "exam": 43,
     "total": 72,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 9,
     "ca2": 14,
     "exam": 57,
     "total": 80,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 15,
     "ca2": 20,
     "exam": 60,
     "total": 95,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Outstanding",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S068",
   "name": "Suleiman Emmanuel",
   "gender": "M",
   "age": 15,
   "class": "SS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 20,
     "ca2": 10,
     "exam": 37,
     "total": 67,
     "grade": "B"
    },
    "English Language": {
     "ca1": 17,
     "ca2": 16,
     "exam": 50,
     "total": 83,
     "grade": "A"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 8,
     "exam": 27,
     "total": 51,
     "grade": "D"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 10,
     "exam": 46,
     "total": 64,
     "grade": "C"
    },
    "Physics": {
     "ca1": 20,
     "ca2": 15,
     "exam": 58,
     "total": 93,
     "grade": "A"
    },
    "Economics": {
     "ca1": 15,
     "ca2": 10,
     "exam": 57,
     "total": 82,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 13,
     "exam": 45,
     "total": 68,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 10,
     "ca2": 14,
     "exam": 44,
     "total": 68,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Part-paid",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S069",
   "name": "Victor Yusuf",
   "gender": "M",
   "age": 15,
   "class": "SS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 13,
     "ca2": 18,
     "exam": 32,
     "total": 63,
     "grade": "C"
    },
    "English Language": {
     "ca1": 14,
     "ca2": 17,
     "exam": 44,
     "total": 75,
     "grade": "A"
    },
    "Biology": {
     "ca1": 20,
     "ca2": 19,
     "exam": 26,
     "total": 65,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 17,
     "ca2": 15,
     "exam": 41,
     "total": 73,
     "grade": "B"
    },
    "Physics": {
     "ca1": 18,
     "ca2": 20,
     "exam": 39,
     "total": 77,
     "grade": "A"
    },
    "Economics": {
     "ca1": 19,
     "ca2": 8,
     "exam": 55,
     "total": 82,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 16,
     "exam": 49,
     "total": 75,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 10,
     "ca2": 18,
     "exam": 40,
     "total": 68,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": [
    {
     "role": "Teacher",
     "author": "Mr. Yusuf Waziri",
     "text": "Excellent lab work this term; encourage for the science club.",
     "date": "2026-08-15"
    }
   ]
  },
  {
   "id": "S070",
   "name": "Zainab Bulus",
   "gender": "F",
   "age": 14,
   "class": "SS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 16,
     "exam": 55,
     "total": 85,
     "grade": "A"
    },
    "English Language": {
     "ca1": 19,
     "ca2": 19,
     "exam": 28,
     "total": 66,
     "grade": "B"
    },
    "Biology": {
     "ca1": 19,
     "ca2": 10,
     "exam": 58,
     "total": 87,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 11,
     "ca2": 16,
     "exam": 45,
     "total": 72,
     "grade": "B"
    },
    "Physics": {
     "ca1": 18,
     "ca2": 15,
     "exam": 58,
     "total": 91,
     "grade": "A"
    },
    "Economics": {
     "ca1": 14,
     "ca2": 13,
     "exam": 36,
     "total": 63,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 15,
     "ca2": 16,
     "exam": 46,
     "total": 77,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 16,
     "ca2": 13,
     "exam": 41,
     "total": 70,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S071",
   "name": "Comfort Wakili",
   "gender": "F",
   "age": 14,
   "class": "SS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 19,
     "ca2": 19,
     "exam": 56,
     "total": 94,
     "grade": "A"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 15,
     "exam": 47,
     "total": 75,
     "grade": "A"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 20,
     "exam": 42,
     "total": 78,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 12,
     "ca2": 9,
     "exam": 59,
     "total": 80,
     "grade": "A"
    },
    "Physics": {
     "ca1": 14,
     "ca2": 14,
     "exam": 47,
     "total": 75,
     "grade": "A"
    },
    "Economics": {
     "ca1": 20,
     "ca2": 20,
     "exam": 34,
     "total": 74,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 12,
     "ca2": 8,
     "exam": 43,
     "total": 63,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 19,
     "ca2": 9,
     "exam": 47,
     "total": 75,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 92,
   "comments": []
  },
  {
   "id": "S072",
   "name": "Sani Wakili",
   "gender": "M",
   "age": 15,
   "class": "SS1",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 10,
     "ca2": 9,
     "exam": 40,
     "total": 59,
     "grade": "C"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 8,
     "exam": 58,
     "total": 77,
     "grade": "A"
    },
    "Biology": {
     "ca1": 11,
     "ca2": 18,
     "exam": 39,
     "total": 68,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 9,
     "exam": 51,
     "total": 68,
     "grade": "B"
    },
    "Physics": {
     "ca1": 13,
     "ca2": 19,
     "exam": 55,
     "total": 87,
     "grade": "A"
    },
    "Economics": {
     "ca1": 9,
     "ca2": 18,
     "exam": 33,
     "total": 60,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 8,
     "ca2": 16,
     "exam": 35,
     "total": 59,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 14,
     "ca2": 18,
     "exam": 55,
     "total": 87,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 86,
   "comments": []
  },
  {
   "id": "S073",
   "name": "Timothy Philip",
   "gender": "M",
   "age": 14,
   "class": "SS1",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 19,
     "exam": 27,
     "total": 62,
     "grade": "C"
    },
    "English Language": {
     "ca1": 10,
     "ca2": 14,
     "exam": 36,
     "total": 60,
     "grade": "C"
    },
    "Biology": {
     "ca1": 8,
     "ca2": 14,
     "exam": 56,
     "total": 78,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 10,
     "ca2": 19,
     "exam": 43,
     "total": 72,
     "grade": "B"
    },
    "Physics": {
     "ca1": 8,
     "ca2": 8,
     "exam": 44,
     "total": 60,
     "grade": "C"
    },
    "Economics": {
     "ca1": 17,
     "ca2": 17,
     "exam": 31,
     "total": 65,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 13,
     "ca2": 12,
     "exam": 54,
     "total": 79,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 18,
     "ca2": 16,
     "exam": 58,
     "total": 92,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 94,
   "comments": []
  },
  {
   "id": "S074",
   "name": "Zainab Zakari",
   "gender": "F",
   "age": 15,
   "class": "SS1",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 12,
     "exam": 36,
     "total": 66,
     "grade": "B"
    },
    "English Language": {
     "ca1": 8,
     "ca2": 19,
     "exam": 46,
     "total": 73,
     "grade": "B"
    },
    "Biology": {
     "ca1": 20,
     "ca2": 12,
     "exam": 37,
     "total": 69,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 10,
     "ca2": 17,
     "exam": 50,
     "total": 77,
     "grade": "A"
    },
    "Physics": {
     "ca1": 14,
     "ca2": 16,
     "exam": 45,
     "total": 75,
     "grade": "A"
    },
    "Economics": {
     "ca1": 9,
     "ca2": 14,
     "exam": 31,
     "total": 54,
     "grade": "D"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 10,
     "exam": 55,
     "total": 75,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 11,
     "exam": 25,
     "total": 49,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S075",
   "name": "Comfort Bala",
   "gender": "F",
   "age": 15,
   "class": "SS1",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 19,
     "ca2": 11,
     "exam": 28,
     "total": 58,
     "grade": "C"
    },
    "English Language": {
     "ca1": 18,
     "ca2": 9,
     "exam": 54,
     "total": 81,
     "grade": "A"
    },
    "Biology": {
     "ca1": 12,
     "ca2": 10,
     "exam": 50,
     "total": 72,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 18,
     "ca2": 16,
     "exam": 44,
     "total": 78,
     "grade": "A"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 9,
     "exam": 43,
     "total": 71,
     "grade": "B"
    },
    "Economics": {
     "ca1": 13,
     "ca2": 17,
     "exam": 39,
     "total": 69,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 11,
     "ca2": 10,
     "exam": 55,
     "total": 76,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 10,
     "ca2": 15,
     "exam": 48,
     "total": 73,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Part-paid",
   "attendance": 91,
   "comments": []
  },
  {
   "id": "S076",
   "name": "Faruk Gambo",
   "gender": "M",
   "age": 15,
   "class": "SS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 16,
     "ca2": 15,
     "exam": 58,
     "total": 89,
     "grade": "A"
    },
    "English Language": {
     "ca1": 19,
     "ca2": 13,
     "exam": 29,
     "total": 61,
     "grade": "C"
    },
    "Biology": {
     "ca1": 17,
     "ca2": 9,
     "exam": 28,
     "total": 54,
     "grade": "D"
    },
    "Chemistry": {
     "ca1": 16,
     "ca2": 16,
     "exam": 37,
     "total": 69,
     "grade": "B"
    },
    "Physics": {
     "ca1": 17,
     "ca2": 16,
     "exam": 34,
     "total": 67,
     "grade": "B"
    },
    "Economics": {
     "ca1": 10,
     "ca2": 13,
     "exam": 58,
     "total": 81,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 15,
     "ca2": 9,
     "exam": 38,
     "total": 62,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 19,
     "ca2": 17,
     "exam": 56,
     "total": 92,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 98,
   "comments": []
  },
  {
   "id": "S077",
   "name": "Caleb Danladi",
   "gender": "M",
   "age": 16,
   "class": "SS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 20,
     "exam": 44,
     "total": 82,
     "grade": "A"
    },
    "English Language": {
     "ca1": 19,
     "ca2": 8,
     "exam": 50,
     "total": 77,
     "grade": "A"
    },
    "Biology": {
     "ca1": 12,
     "ca2": 8,
     "exam": 38,
     "total": 58,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 17,
     "ca2": 9,
     "exam": 27,
     "total": 53,
     "grade": "D"
    },
    "Physics": {
     "ca1": 14,
     "ca2": 13,
     "exam": 29,
     "total": 56,
     "grade": "C"
    },
    "Economics": {
     "ca1": 16,
     "ca2": 8,
     "exam": 29,
     "total": 53,
     "grade": "D"
    },
    "Civic Education": {
     "ca1": 15,
     "ca2": 8,
     "exam": 43,
     "total": 66,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 14,
     "ca2": 10,
     "exam": 33,
     "total": 57,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S078",
   "name": "Halima Mustapha",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 13,
     "exam": 32,
     "total": 63,
     "grade": "C"
    },
    "English Language": {
     "ca1": 10,
     "ca2": 16,
     "exam": 50,
     "total": 76,
     "grade": "A"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 10,
     "exam": 39,
     "total": 65,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 20,
     "exam": 26,
     "total": 54,
     "grade": "D"
    },
    "Physics": {
     "ca1": 12,
     "ca2": 15,
     "exam": 59,
     "total": 86,
     "grade": "A"
    },
    "Economics": {
     "ca1": 14,
     "ca2": 16,
     "exam": 49,
     "total": 79,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 11,
     "ca2": 11,
     "exam": 54,
     "total": 76,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 10,
     "exam": 42,
     "total": 65,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S079",
   "name": "Deborah James",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 17,
     "exam": 27,
     "total": 53,
     "grade": "D"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 17,
     "exam": 28,
     "total": 60,
     "grade": "C"
    },
    "Biology": {
     "ca1": 11,
     "ca2": 19,
     "exam": 27,
     "total": 57,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 14,
     "ca2": 15,
     "exam": 39,
     "total": 68,
     "grade": "B"
    },
    "Physics": {
     "ca1": 16,
     "ca2": 11,
     "exam": 28,
     "total": 55,
     "grade": "C"
    },
    "Economics": {
     "ca1": 10,
     "ca2": 16,
     "exam": 43,
     "total": 69,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 11,
     "ca2": 19,
     "exam": 45,
     "total": 75,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 17,
     "ca2": 17,
     "exam": 45,
     "total": 79,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 92,
   "comments": []
  },
  {
   "id": "S080",
   "name": "Abubakar Andrew",
   "gender": "M",
   "age": 15,
   "class": "SS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 18,
     "exam": 52,
     "total": 88,
     "grade": "A"
    },
    "English Language": {
     "ca1": 16,
     "ca2": 15,
     "exam": 28,
     "total": 59,
     "grade": "C"
    },
    "Biology": {
     "ca1": 13,
     "ca2": 18,
     "exam": 49,
     "total": 80,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 20,
     "ca2": 16,
     "exam": 45,
     "total": 81,
     "grade": "A"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 14,
     "exam": 51,
     "total": 84,
     "grade": "A"
    },
    "Economics": {
     "ca1": 10,
     "ca2": 12,
     "exam": 49,
     "total": 71,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 20,
     "exam": 59,
     "total": 89,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 15,
     "ca2": 11,
     "exam": 39,
     "total": 65,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S081",
   "name": "Isaac Joseph",
   "gender": "M",
   "age": 15,
   "class": "SS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 11,
     "exam": 41,
     "total": 66,
     "grade": "B"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 13,
     "exam": 30,
     "total": 54,
     "grade": "D"
    },
    "Biology": {
     "ca1": 15,
     "ca2": 13,
     "exam": 30,
     "total": 58,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 16,
     "ca2": 19,
     "exam": 37,
     "total": 72,
     "grade": "B"
    },
    "Physics": {
     "ca1": 8,
     "ca2": 12,
     "exam": 49,
     "total": 69,
     "grade": "B"
    },
    "Economics": {
     "ca1": 18,
     "ca2": 17,
     "exam": 27,
     "total": 62,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 9,
     "ca2": 11,
     "exam": 60,
     "total": 80,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 11,
     "ca2": 15,
     "exam": 38,
     "total": 64,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S082",
   "name": "Hauwa Wakili",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 11,
     "exam": 60,
     "total": 85,
     "grade": "A"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 20,
     "exam": 43,
     "total": 76,
     "grade": "A"
    },
    "Biology": {
     "ca1": 14,
     "ca2": 15,
     "exam": 59,
     "total": 88,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 18,
     "ca2": 13,
     "exam": 44,
     "total": 75,
     "grade": "A"
    },
    "Physics": {
     "ca1": 12,
     "ca2": 13,
     "exam": 57,
     "total": 82,
     "grade": "A"
    },
    "Economics": {
     "ca1": 15,
     "ca2": 15,
     "exam": 31,
     "total": 61,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 20,
     "ca2": 19,
     "exam": 55,
     "total": 94,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 20,
     "ca2": 13,
     "exam": 38,
     "total": 71,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 84,
   "comments": []
  },
  {
   "id": "S083",
   "name": "Comfort Andrew",
   "gender": "F",
   "age": 16,
   "class": "SS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 10,
     "exam": 37,
     "total": 59,
     "grade": "C"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 11,
     "exam": 49,
     "total": 73,
     "grade": "B"
    },
    "Biology": {
     "ca1": 17,
     "ca2": 11,
     "exam": 56,
     "total": 84,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 16,
     "ca2": 18,
     "exam": 46,
     "total": 80,
     "grade": "A"
    },
    "Physics": {
     "ca1": 12,
     "ca2": 20,
     "exam": 56,
     "total": 88,
     "grade": "A"
    },
    "Economics": {
     "ca1": 19,
     "ca2": 18,
     "exam": 56,
     "total": 93,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 15,
     "ca2": 10,
     "exam": 47,
     "total": 72,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 10,
     "ca2": 10,
     "exam": 59,
     "total": 79,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 86,
   "comments": []
  },
  {
   "id": "S084",
   "name": "Lawal Ishaya",
   "gender": "M",
   "age": 15,
   "class": "SS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 20,
     "ca2": 8,
     "exam": 51,
     "total": 79,
     "grade": "A"
    },
    "English Language": {
     "ca1": 10,
     "ca2": 18,
     "exam": 39,
     "total": 67,
     "grade": "B"
    },
    "Biology": {
     "ca1": 9,
     "ca2": 19,
     "exam": 34,
     "total": 62,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 11,
     "exam": 57,
     "total": 76,
     "grade": "A"
    },
    "Physics": {
     "ca1": 15,
     "ca2": 13,
     "exam": 28,
     "total": 56,
     "grade": "C"
    },
    "Economics": {
     "ca1": 17,
     "ca2": 18,
     "exam": 55,
     "total": 90,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 18,
     "ca2": 15,
     "exam": 26,
     "total": 59,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 8,
     "ca2": 16,
     "exam": 60,
     "total": 84,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S085",
   "name": "David Joseph",
   "gender": "M",
   "age": 16,
   "class": "SS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 20,
     "ca2": 10,
     "exam": 31,
     "total": 61,
     "grade": "C"
    },
    "English Language": {
     "ca1": 9,
     "ca2": 16,
     "exam": 34,
     "total": 59,
     "grade": "C"
    },
    "Biology": {
     "ca1": 11,
     "ca2": 11,
     "exam": 58,
     "total": 80,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 12,
     "ca2": 13,
     "exam": 42,
     "total": 67,
     "grade": "B"
    },
    "Physics": {
     "ca1": 20,
     "ca2": 14,
     "exam": 30,
     "total": 64,
     "grade": "C"
    },
    "Economics": {
     "ca1": 13,
     "ca2": 14,
     "exam": 54,
     "total": 81,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 17,
     "ca2": 11,
     "exam": 39,
     "total": 67,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 12,
     "ca2": 18,
     "exam": 30,
     "total": 60,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S086",
   "name": "Aisha Bala",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 19,
     "ca2": 10,
     "exam": 30,
     "total": 59,
     "grade": "C"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 14,
     "exam": 46,
     "total": 75,
     "grade": "A"
    },
    "Biology": {
     "ca1": 17,
     "ca2": 9,
     "exam": 58,
     "total": 84,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 11,
     "exam": 38,
     "total": 57,
     "grade": "C"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 17,
     "exam": 55,
     "total": 91,
     "grade": "A"
    },
    "Economics": {
     "ca1": 12,
     "ca2": 8,
     "exam": 29,
     "total": 49,
     "grade": "D"
    },
    "Civic Education": {
     "ca1": 18,
     "ca2": 12,
     "exam": 59,
     "total": 89,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 17,
     "ca2": 18,
     "exam": 27,
     "total": 62,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Part-paid",
   "attendance": 96,
   "comments": [
    {
     "role": "Teacher",
     "author": "Mrs. Esther Michael",
     "text": "Consistently punctual and well prepared for class.",
     "date": "2026-08-17"
    }
   ]
  },
  {
   "id": "S087",
   "name": "Esther Thomas",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 17,
     "ca2": 11,
     "exam": 49,
     "total": 77,
     "grade": "A"
    },
    "English Language": {
     "ca1": 18,
     "ca2": 16,
     "exam": 46,
     "total": 80,
     "grade": "A"
    },
    "Biology": {
     "ca1": 14,
     "ca2": 20,
     "exam": 33,
     "total": 67,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 20,
     "ca2": 19,
     "exam": 30,
     "total": 69,
     "grade": "B"
    },
    "Physics": {
     "ca1": 16,
     "ca2": 19,
     "exam": 47,
     "total": 82,
     "grade": "A"
    },
    "Economics": {
     "ca1": 8,
     "ca2": 9,
     "exam": 52,
     "total": 69,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 11,
     "ca2": 9,
     "exam": 46,
     "total": 66,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 17,
     "ca2": 20,
     "exam": 50,
     "total": 87,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S088",
   "name": "Umar Garba",
   "gender": "M",
   "age": 16,
   "class": "SS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 20,
     "exam": 43,
     "total": 72,
     "grade": "B"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 11,
     "exam": 29,
     "total": 60,
     "grade": "C"
    },
    "Biology": {
     "ca1": 9,
     "ca2": 12,
     "exam": 34,
     "total": 55,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 14,
     "ca2": 19,
     "exam": 34,
     "total": 67,
     "grade": "B"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 14,
     "exam": 45,
     "total": 78,
     "grade": "A"
    },
    "Economics": {
     "ca1": 13,
     "ca2": 9,
     "exam": 30,
     "total": 52,
     "grade": "D"
    },
    "Civic Education": {
     "ca1": 8,
     "ca2": 12,
     "exam": 53,
     "total": 73,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 20,
     "exam": 42,
     "total": 75,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S089",
   "name": "Emmanuel Yusuf",
   "gender": "M",
   "age": 15,
   "class": "SS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 13,
     "ca2": 16,
     "exam": 30,
     "total": 59,
     "grade": "C"
    },
    "English Language": {
     "ca1": 17,
     "ca2": 17,
     "exam": 45,
     "total": 79,
     "grade": "A"
    },
    "Biology": {
     "ca1": 14,
     "ca2": 8,
     "exam": 43,
     "total": 65,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 14,
     "ca2": 14,
     "exam": 30,
     "total": 58,
     "grade": "C"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 16,
     "exam": 40,
     "total": 75,
     "grade": "A"
    },
    "Economics": {
     "ca1": 17,
     "ca2": 16,
     "exam": 35,
     "total": 68,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 18,
     "ca2": 14,
     "exam": 35,
     "total": 67,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 10,
     "ca2": 12,
     "exam": 44,
     "total": 66,
     "grade": "B"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": []
  },
  {
   "id": "S090",
   "name": "Khadija Mustapha",
   "gender": "F",
   "age": 16,
   "class": "SS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 12,
     "ca2": 11,
     "exam": 56,
     "total": 79,
     "grade": "A"
    },
    "English Language": {
     "ca1": 17,
     "ca2": 17,
     "exam": 37,
     "total": 71,
     "grade": "B"
    },
    "Biology": {
     "ca1": 15,
     "ca2": 9,
     "exam": 33,
     "total": 57,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 12,
     "ca2": 8,
     "exam": 50,
     "total": 70,
     "grade": "B"
    },
    "Physics": {
     "ca1": 13,
     "ca2": 17,
     "exam": 49,
     "total": 79,
     "grade": "A"
    },
    "Economics": {
     "ca1": 20,
     "ca2": 13,
     "exam": 53,
     "total": 86,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 13,
     "ca2": 14,
     "exam": 33,
     "total": 60,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 12,
     "ca2": 13,
     "exam": 37,
     "total": 62,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Part-paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S091",
   "name": "Rebecca Peters",
   "gender": "F",
   "age": 16,
   "class": "SS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 14,
     "ca2": 12,
     "exam": 50,
     "total": 76,
     "grade": "A"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 9,
     "exam": 37,
     "total": 59,
     "grade": "C"
    },
    "Biology": {
     "ca1": 17,
     "ca2": 16,
     "exam": 36,
     "total": 69,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 18,
     "ca2": 20,
     "exam": 60,
     "total": 98,
     "grade": "A"
    },
    "Physics": {
     "ca1": 8,
     "ca2": 19,
     "exam": 54,
     "total": 81,
     "grade": "A"
    },
    "Economics": {
     "ca1": 19,
     "ca2": 11,
     "exam": 53,
     "total": 83,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 20,
     "ca2": 12,
     "exam": 29,
     "total": 61,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 20,
     "ca2": 20,
     "exam": 51,
     "total": 91,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 88,
   "comments": []
  },
  {
   "id": "S092",
   "name": "Nuhu Bulus",
   "gender": "M",
   "age": 16,
   "class": "SS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 9,
     "ca2": 15,
     "exam": 55,
     "total": 79,
     "grade": "A"
    },
    "English Language": {
     "ca1": 17,
     "ca2": 14,
     "exam": 59,
     "total": 90,
     "grade": "A"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 19,
     "exam": 51,
     "total": 86,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 16,
     "ca2": 8,
     "exam": 48,
     "total": 72,
     "grade": "B"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 20,
     "exam": 59,
     "total": 98,
     "grade": "A"
    },
    "Economics": {
     "ca1": 17,
     "ca2": 18,
     "exam": 30,
     "total": 65,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 9,
     "ca2": 20,
     "exam": 40,
     "total": 69,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 18,
     "ca2": 18,
     "exam": 47,
     "total": 83,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 5,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S093",
   "name": "John Bulus",
   "gender": "M",
   "age": 15,
   "class": "SS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 8,
     "ca2": 9,
     "exam": 41,
     "total": 58,
     "grade": "C"
    },
    "English Language": {
     "ca1": 11,
     "ca2": 16,
     "exam": 58,
     "total": 85,
     "grade": "A"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 17,
     "exam": 39,
     "total": 72,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 15,
     "ca2": 13,
     "exam": 50,
     "total": 78,
     "grade": "A"
    },
    "Physics": {
     "ca1": 15,
     "ca2": 20,
     "exam": 57,
     "total": 92,
     "grade": "A"
    },
    "Economics": {
     "ca1": 10,
     "ca2": 13,
     "exam": 26,
     "total": 49,
     "grade": "D"
    },
    "Civic Education": {
     "ca1": 15,
     "ca2": 9,
     "exam": 43,
     "total": 67,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 14,
     "ca2": 9,
     "exam": 32,
     "total": 55,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Part-paid",
   "attendance": 99,
   "comments": []
  },
  {
   "id": "S094",
   "name": "Maryam Sunday",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 15,
     "ca2": 19,
     "exam": 53,
     "total": 87,
     "grade": "A"
    },
    "English Language": {
     "ca1": 13,
     "ca2": 9,
     "exam": 44,
     "total": 66,
     "grade": "B"
    },
    "Biology": {
     "ca1": 8,
     "ca2": 20,
     "exam": 32,
     "total": 60,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 8,
     "ca2": 13,
     "exam": 31,
     "total": 52,
     "grade": "D"
    },
    "Physics": {
     "ca1": 18,
     "ca2": 20,
     "exam": 35,
     "total": 73,
     "grade": "B"
    },
    "Economics": {
     "ca1": 19,
     "ca2": 11,
     "exam": 58,
     "total": 88,
     "grade": "A"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 16,
     "exam": 35,
     "total": 61,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 13,
     "ca2": 16,
     "exam": 52,
     "total": 81,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S095",
   "name": "Joy Yusuf",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 15,
     "ca2": 17,
     "exam": 52,
     "total": 84,
     "grade": "A"
    },
    "English Language": {
     "ca1": 14,
     "ca2": 8,
     "exam": 38,
     "total": 60,
     "grade": "C"
    },
    "Biology": {
     "ca1": 11,
     "ca2": 12,
     "exam": 29,
     "total": 52,
     "grade": "D"
    },
    "Chemistry": {
     "ca1": 17,
     "ca2": 9,
     "exam": 59,
     "total": 85,
     "grade": "A"
    },
    "Physics": {
     "ca1": 10,
     "ca2": 13,
     "exam": 45,
     "total": 68,
     "grade": "B"
    },
    "Economics": {
     "ca1": 11,
     "ca2": 15,
     "exam": 32,
     "total": 58,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 12,
     "ca2": 18,
     "exam": 56,
     "total": 86,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 16,
     "ca2": 18,
     "exam": 45,
     "total": 79,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 4,
    "Communication & Participation": 5,
    "Athletics & Sports": 4,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 3
   },
   "payment": "Fully paid",
   "attendance": 98,
   "comments": []
  },
  {
   "id": "S096",
   "name": "Auwal Garba",
   "gender": "M",
   "age": 16,
   "class": "SS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 17,
     "ca2": 17,
     "exam": 30,
     "total": 64,
     "grade": "C"
    },
    "English Language": {
     "ca1": 18,
     "ca2": 10,
     "exam": 45,
     "total": 73,
     "grade": "B"
    },
    "Biology": {
     "ca1": 9,
     "ca2": 11,
     "exam": 44,
     "total": 64,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 9,
     "ca2": 10,
     "exam": 48,
     "total": 67,
     "grade": "B"
    },
    "Physics": {
     "ca1": 19,
     "ca2": 10,
     "exam": 57,
     "total": 86,
     "grade": "A"
    },
    "Economics": {
     "ca1": 14,
     "ca2": 14,
     "exam": 33,
     "total": 61,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 17,
     "ca2": 14,
     "exam": 52,
     "total": 83,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 10,
     "ca2": 15,
     "exam": 59,
     "total": 84,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 5,
    "Communication & Participation": 3,
    "Athletics & Sports": 5,
    "Extracurricular Activities": 3,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 89,
   "comments": []
  },
  {
   "id": "S097",
   "name": "John Yakubu",
   "gender": "M",
   "age": 15,
   "class": "SS2",
   "house": "Black",
   "scores": {
    "Mathematics": {
     "ca1": 13,
     "ca2": 8,
     "exam": 56,
     "total": 77,
     "grade": "A"
    },
    "English Language": {
     "ca1": 10,
     "ca2": 11,
     "exam": 49,
     "total": 70,
     "grade": "B"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 16,
     "exam": 56,
     "total": 88,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 14,
     "ca2": 18,
     "exam": 56,
     "total": 88,
     "grade": "A"
    },
    "Physics": {
     "ca1": 14,
     "ca2": 19,
     "exam": 53,
     "total": 86,
     "grade": "A"
    },
    "Economics": {
     "ca1": 15,
     "ca2": 10,
     "exam": 30,
     "total": 55,
     "grade": "C"
    },
    "Civic Education": {
     "ca1": 17,
     "ca2": 8,
     "exam": 39,
     "total": 64,
     "grade": "C"
    },
    "Literature-in-English": {
     "ca1": 12,
     "ca2": 8,
     "exam": 42,
     "total": 62,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 3,
    "Behavioral Conduct": 5,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 5
   },
   "payment": "Part-paid",
   "attendance": 99,
   "comments": [
    {
     "role": "Admin",
     "author": "Mr. Yusuf Waziri (VP Academics)",
     "text": "Recommended for the inter-house debate team.",
     "date": "2026-08-18"
    }
   ]
  },
  {
   "id": "S098",
   "name": "Rukayya Joseph",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "White",
   "scores": {
    "Mathematics": {
     "ca1": 17,
     "ca2": 9,
     "exam": 42,
     "total": 68,
     "grade": "B"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 16,
     "exam": 48,
     "total": 84,
     "grade": "A"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 20,
     "exam": 27,
     "total": 63,
     "grade": "C"
    },
    "Chemistry": {
     "ca1": 20,
     "ca2": 19,
     "exam": 53,
     "total": 92,
     "grade": "A"
    },
    "Physics": {
     "ca1": 16,
     "ca2": 11,
     "exam": 52,
     "total": 79,
     "grade": "A"
    },
    "Economics": {
     "ca1": 9,
     "ca2": 19,
     "exam": 40,
     "total": 68,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 12,
     "ca2": 8,
     "exam": 53,
     "total": 73,
     "grade": "B"
    },
    "Literature-in-English": {
     "ca1": 12,
     "ca2": 13,
     "exam": 30,
     "total": 55,
     "grade": "C"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 5
   },
   "payment": "Fully paid",
   "attendance": 97,
   "comments": []
  },
  {
   "id": "S099",
   "name": "Ruth Usman",
   "gender": "F",
   "age": 15,
   "class": "SS2",
   "house": "Green",
   "scores": {
    "Mathematics": {
     "ca1": 20,
     "ca2": 11,
     "exam": 38,
     "total": 69,
     "grade": "B"
    },
    "English Language": {
     "ca1": 20,
     "ca2": 8,
     "exam": 47,
     "total": 75,
     "grade": "A"
    },
    "Biology": {
     "ca1": 16,
     "ca2": 12,
     "exam": 59,
     "total": 87,
     "grade": "A"
    },
    "Chemistry": {
     "ca1": 10,
     "ca2": 13,
     "exam": 43,
     "total": 66,
     "grade": "B"
    },
    "Physics": {
     "ca1": 12,
     "ca2": 17,
     "exam": 42,
     "total": 71,
     "grade": "B"
    },
    "Economics": {
     "ca1": 16,
     "ca2": 18,
     "exam": 31,
     "total": 65,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 10,
     "ca2": 20,
     "exam": 51,
     "total": 81,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 8,
     "ca2": 12,
     "exam": 33,
     "total": 53,
     "grade": "D"
    }
   },
   "ratings": {
    "Academic Effort": 5,
    "Behavioral Conduct": 3,
    "Communication & Participation": 3,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 5,
    "Leadership & Teamwork": 4
   },
   "payment": "Part-paid",
   "attendance": 96,
   "comments": []
  },
  {
   "id": "S100",
   "name": "Bello Waziri",
   "gender": "M",
   "age": 16,
   "class": "SS2",
   "house": "Yellow",
   "scores": {
    "Mathematics": {
     "ca1": 18,
     "ca2": 14,
     "exam": 49,
     "total": 81,
     "grade": "A"
    },
    "English Language": {
     "ca1": 15,
     "ca2": 9,
     "exam": 30,
     "total": 54,
     "grade": "D"
    },
    "Biology": {
     "ca1": 14,
     "ca2": 16,
     "exam": 42,
     "total": 72,
     "grade": "B"
    },
    "Chemistry": {
     "ca1": 19,
     "ca2": 13,
     "exam": 54,
     "total": 86,
     "grade": "A"
    },
    "Physics": {
     "ca1": 15,
     "ca2": 13,
     "exam": 25,
     "total": 53,
     "grade": "D"
    },
    "Economics": {
     "ca1": 20,
     "ca2": 19,
     "exam": 30,
     "total": 69,
     "grade": "B"
    },
    "Civic Education": {
     "ca1": 19,
     "ca2": 15,
     "exam": 47,
     "total": 81,
     "grade": "A"
    },
    "Literature-in-English": {
     "ca1": 9,
     "ca2": 20,
     "exam": 59,
     "total": 88,
     "grade": "A"
    }
   },
   "ratings": {
    "Academic Effort": 4,
    "Behavioral Conduct": 3,
    "Communication & Participation": 4,
    "Athletics & Sports": 3,
    "Extracurricular Activities": 4,
    "Leadership & Teamwork": 4
   },
   "payment": "Fully paid",
   "attendance": 93,
   "comments": []
  }
 ],
 "assignments": [
  {
   "id": "A1",
   "class": "JSS1",
   "subject": "Mathematics",
   "title": "Fractions & Decimals Worksheet",
   "question": "Solve questions 1-20 on fractions and decimals from the workbook, showing all working.",
   "due": "2026-09-10"
  },
  {
   "id": "A2",
   "class": "JSS2",
   "subject": "Basic Science",
   "title": "States of Matter Report",
   "question": "Write a one-page report explaining the three states of matter with two everyday examples of each.",
   "due": "2026-09-12"
  },
  {
   "id": "A3",
   "class": "SS1",
   "subject": "English Language",
   "title": "Argumentative Essay",
   "question": "Write a 400-word argumentative essay on 'Social media does more harm than good to teenagers.'",
   "due": "2026-09-14"
  },
  {
   "id": "A4",
   "class": "SS2",
   "subject": "Biology",
   "title": "Photosynthesis Diagram",
   "question": "Draw and label a diagram showing the process of photosynthesis, and explain each stage in your own words.",
   "due": "2026-09-15"
  }
 ],
 "schemeOfWork": {
  "Mathematics": [
   "Week 1-2: Number bases and indices",
   "Week 3-4: Fractions, decimals and percentages",
   "Week 5-6: Simple equations and word problems",
   "Week 7-8: Introduction to geometry — angles and shapes",
   "Week 9-10: Statistics — mean, median, mode",
   "Week 11-12: Revision and end-of-term assessment"
  ],
  "English Language": [
   "Week 1-2: Comprehension and vocabulary building",
   "Week 3-4: Grammar — tenses and parts of speech",
   "Week 5-6: Letter and essay writing",
   "Week 7-8: Literature appreciation — prose extracts",
   "Week 9-10: Oral English and public speaking",
   "Week 11-12: Revision and end-of-term assessment"
  ]
 },
 "lessonPlans": [
  {
   "id": "LP1",
   "subject": "Mathematics",
   "class": "JSS1",
   "week": "Week 3",
   "topic": "Fractions: Addition and Subtraction",
   "objectives": "By the end of the lesson, students should be able to add and subtract fractions with different denominators.",
   "materials": "Fraction charts, workbook, whiteboard",
   "activities": "1) Recap equivalent fractions (10 min). 2) Teacher demonstration on the board (15 min). 3) Guided practice in pairs (15 min). 4) Independent worksheet (15 min).",
   "assessment": "Marking of worksheet; 5 oral questions to check understanding.",
   "review_comments": [
    {
     "author": "Mr. Yusuf Waziri (VP Academics)",
     "text": "Well structured. Consider adding a real-life example (sharing food/money) to open the lesson.",
     "date": "2026-08-14"
    }
   ]
  },
  {
   "id": "LP2",
   "subject": "English Language",
   "class": "SS1",
   "week": "Week 5",
   "topic": "Letter Writing: Formal Letters",
   "objectives": "By the end of the lesson, students should be able to identify and correctly apply the format of a formal letter.",
   "materials": "Sample letters, exercise books",
   "activities": "1) Review sample formal letter as a class (10 min). 2) Identify parts of the letter (10 min). 3) Guided drafting exercise (20 min). 4) Peer review in pairs (15 min).",
   "assessment": "Collect drafts; select two to review aloud with the class.",
   "review_comments": [
    {
     "author": "Mr. Yusuf Waziri (VP Academics)",
     "text": "Good pacing. Please attach the sample letter as an appendix next submission.",
     "date": "2026-08-15"
    }
   ]
  }
 ],
 "calendarEvents": [
  {
   "date": "2026-09-08",
   "title": "Term begins",
   "type": "Academic"
  },
  {
   "date": "2026-09-22",
   "title": "Inter-House Debate Competition",
   "type": "Inter-House"
  },
  {
   "date": "2026-10-06",
   "title": "Mid-term test week begins",
   "type": "Academic"
  },
  {
   "date": "2026-10-16",
   "title": "Inter-House Music & Dancing Competition",
   "type": "Inter-House"
  },
  {
   "date": "2026-10-30",
   "title": "Career Day",
   "type": "Event"
  },
  {
   "date": "2026-11-10",
   "title": "Inter-House Games Competition",
   "type": "Inter-House"
  },
  {
   "date": "2026-11-24",
   "title": "Parent-Teacher Conference",
   "type": "Event"
  },
  {
   "date": "2026-12-05",
   "title": "Examinations begin",
   "type": "Academic"
  },
  {
   "date": "2026-12-18",
   "title": "Term ends / Prize-giving day",
   "type": "Academic"
  }
 ],
 "transportRoutes": {
  "Yola → School": [
   "Jimeta Modern Market",
   "Yola Bypass Junction",
   "Doubeli Roundabout",
   "Rumde Junction",
   "Kofare Gate"
  ],
  "Girei → School": [
   "Girei Central Market",
   "Waduku Junction",
   "Damilu Road",
   "Bekaji Junction",
   "Kofare Gate"
  ],
  "Within Jimeta → School": [
   "Jimeta Main Park",
   "Nassarawo Junction",
   "Ajiya Road",
   "Alkalawa Roundabout",
   "Kofare Gate"
  ]
 },
 "transportTimes": {
  "Yola → School": "6:00am departure, stops every 8-10 mins",
  "Girei → School": "6:10am departure, stops every 8-10 mins",
  "Within Jimeta → School": "6:40am departure, stops every 5 mins"
 },
 "testimonials": [
  {
   "name": "Mrs. Amina Suleiman",
   "role": "Parent of a JSS2 student",
   "text": "My daughter has grown so much in confidence since joining Learning Roots. The teachers genuinely know each child."
  },
  {
   "name": "Mr. David Emmanuel",
   "role": "Parent of an SS1 student",
   "text": "What stood out for us was the communication — we always know how our son is doing, not just at report card time."
  },
  {
   "name": "Hajiya Zainab Bello",
   "role": "Parent of two students",
   "text": "Both my children are thriving here. The balance between academics and character building is exactly what we wanted."
  },
  {
   "name": "Mrs. Ruth Thomas",
   "role": "Parent of a Primary student",
   "text": "The school feels like a genuine community. Every staff member we've met has been warm and attentive."
  },
  {
   "name": "Alhaji Musa Adamu",
   "role": "Parent of a JSS1 student",
   "text": "We moved our son here mid-year and the transition was smooth. His grades and his enthusiasm for school have both improved."
  }
 ]
};
