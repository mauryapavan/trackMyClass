import { faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Result = () => {
    const tests = [
        
       
        {
            testName: "Unit Test 1",
            subject: "Mathematics",
            date: "2025-08-05",
            status: "Completed",
            result: "82/100",
            syllabus: [
                "Algebra (Linear equations, Polynomials)",
                "Trigonometry (Basics)"
            ]
        },
        {
            testName: "Unit Test 2",
            subject: "Science",
            date: "2025-08-12",
            status: "Completed",
            result: "76/100",
            syllabus: [
                "Physics: Motion & Force",
                "Chemistry: Acids, Bases & Salts",
                "Biology: Cell Structure"
            ]
        },
        {
            testName: "Unit Test 3",
            subject: "English",
            date: "2025-08-18",
            status: "Completed",
            result: "88/100",
            syllabus: [
                "Grammar (Tenses, Voice)",
                "Literature: Prose – The Last Leaf",
                "Writing Skills – Letter Writing"
            ]
        },
        {
            testName: "Mid Term Exam",
            subject: "All Subjects",
            date: "2025-09-02",
            status: "Completed",
            result: "74% Overall",
            syllabus: [
                "Maths: Algebra, Trigonometry, Geometry",
                "Science: Motion, Force, Work, Cell, Chemical Reactions",
                "English: Literature (All chapters till August)",
                "Social Science: History Ch 1–3, Civics Ch 1–2"
            ]
        },
        {
            testName: "Unit Test 4",
            subject: "Mathematics",
            date: "2025-09-20",
            status: "Completed",
            result: "90/100",
            syllabus: [
                "Probability",
                "Statistics",
                "Coordinate Geometry"
            ]
        },
        {
            testName: "Unit Test 5",
            subject: "Computer Science",
            date: "2025-09-30",
            status: "Completed",
            result: "95/100",
            syllabus: [
                "Python Basics",
                "Data Types & Operators",
                "Loops & Functions"
            ]
        },

    ];

    return (
        <div className="m-5 p-5">
            <div className="max-w-4xl mx-auto p-4 ">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
                    📚 Test Details
                </h2>

                {tests.map((test, index) => (
                    <div
                        key={index}
                        className="bg-white border flex  rounded-2xl shadow-md p-5 mb-5 hover:shadow-lg transition"
                        style={{ backgroundColor: "#7991c9" }}
                    >
                        {/* Header with test name & icon */}
                        <div className="flex flex-col  items-center mb-2 w-1/2 min-h-50" style={{ backgroundColor: "#d6dce9ff" }}>
                            <div>
                                <h3 className="text-3xl font-semibold text-gray-700">
                                    {test.testName}
                                </h3>
                            </div>
                            <div className="m-0">

                                {/* Test details */}
                                <p className="text-md text-gray-600">
                                    <span className="font-medium">Subject:</span> {test.subject}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Date:</span> {test.date}
                                </p>
                                <p className="text-sm text-gray-600">
                                    <span className="font-medium">Status:</span>{" "}
                                    <span
                                        className={`font-semibold ${test.status === "Completed"
                                            ? "text-green-600"
                                            : "text-orange-500"
                                            }`}
                                    >
                                        {test.status}
                                    </span>
                                </p>
                                <p className="text-sm text-gray-600 mb-3">
                                    <span className="font-medium">Result:</span> {test.result}
                                </p>
                            </div>
                        </div>
                        {/* Syllabus */}
                        <div style={{ backgroundColor: "#d6dce9ff" }} className="w-1/2">
                            <p className="font-medium text-gray-700">Syllabus:</p>
                            <ul className="list-disc list-inside text-gray-600 text-sm mt-1">
                                {test.syllabus.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            {test.status === "Completed" ? (
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className="text-green-500 text-2xl"
                                />
                            ) : (
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="text-orange-400 text-2xl"
                                />
                            )}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Result;