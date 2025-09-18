import { faCheckCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UpcomingTests = () => {
    const tests = [{
        testName: "Unit Test 6",
        subject: "Social Science",
        date: "2025-10-05",
        status: "Upcoming",
        result: "Pending",
        syllabus: [
            "History: Nationalism in India",
            "Civics: Democracy & Diversity",
            "Geography: Climate & Resources"
        ]
    },
    {
        testName: "Pre-Final Exam",
        subject: "All Subjects",
        date: "2025-10-25",
        status: "Upcoming",
        result: "Pending",
        syllabus: [
            "Complete syllabus till October"
        ]
    },
    {
        testName: "Final Practical",
        subject: "Science Lab",
        date: "2025-11-10",
        status: "Upcoming",
        result: "Pending",
        syllabus: [
            "Physics: Experiments on Force & Motion",
            "Chemistry: Salt Analysis",
            "Biology: Slide Preparation"
        ]
    },
    {
        testName: "Final Exam",
        subject: "All Subjects",
        date: "2025-11-20",
        status: "Upcoming",
        result: "Pending",
        syllabus: [
            "Full Year Syllabus (All Units)"
        ]
    },]
    return (
        <div className="m-5">
            <div className="max-w-4xl mx-auto p-4 ">
                <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
                    📚 Upcoming Test Details
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

export default UpcomingTests