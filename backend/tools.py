import csv
import os

def search_feedback(keyword):

    results = []

    with open("../Data/feedback.csv", "r") as file:
        reader = csv.DictReader(file)

        for row in reader:
            if keyword.lower() in row["feedback"].lower():
                results.append(row["feedback"])

    return results


def find_theme(theme_name):

    results = []

    with open("../Data/feedback.csv", "r") as file:
        reader = csv.DictReader(file)

        for row in reader:

            text = row["feedback"].lower()
            theme = theme_name.lower()

            if theme in text:
                results.append(row["feedback"])

    return results


def get_summary():

    summary = {}

    with open("../Data/feedback.csv", "r") as file:
        reader = csv.DictReader(file)

        for row in reader:

            text = row["feedback"].lower()

            if "upload" in text or "pdf" in text or "file" in text:
                theme = "File Upload Problems"

            elif "dashboard" in text or "navigation" in text:
                theme = "Dashboard Usability"

            elif "support" in text:
                theme = "Customer Support"

            elif "slow" in text or "loading" in text or "load" in text or "time" in text:
                theme = "Performance Problems"

            else:
                theme = "Other"

            if theme in summary:
                summary[theme] += 1
            else:
                summary[theme] = 1

    return summary


def get_priority(count):

    if count >= 3:
        return "HIGH"
    elif count == 2:
        return "MEDIUM"
    else:
        return "LOW"