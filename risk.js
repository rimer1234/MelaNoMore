function Submit()
{
    var score = 0;
    if (document.getElementById("question-1-b").checked)
        score += 7;

    if (document.getElementById("question-2-c").checked)
        score += 5;
    if (document.getElementById("question-2-d").checked)
        score += 8;
    if (document.getElementById("question-2-e").checked)
        score += 11;

    if (document.getElementById("question-3-b").checked)
        score += 1;
    if (document.getElementById("question-3-c").checked)
        score += 4;
    if (document.getElementById("question-3-d").checked)
        score += 7;

    if (document.getElementById("question-4-b").checked)
        score += 4;
    if (document.getElementById("question-4-c").checked)
        score += 5;
    if (document.getElementById("question-4-d").checked)
        score += 8;

    if (document.getElementById("question-5-b").checked)
        score += 4;
    if (document.getElementById("question-5-c").checked)
        score += 6;
    if (document.getElementById("question-5-d").checked)
        score += 10;

    if (document.getElementById("question-6-b").checked)
        score += 3;
    if (document.getElementById("question-6-c").checked)
        score += 5;
    if (document.getElementById("question-6-d").checked)
        score += 11;

    if (document.getElementById("question-7-b").checked)
        score += 13;

    var elem = document.getElementById("res")
    if (score <= 22)
    {
        elem.innerHTML = "Your Melanoma Risk Level: Low";
        elem.style.color = "green";
    }
    else if (score <= 25)
    {
        elem.innerHTML = "Your Melanoma Risk Level: Moderate";
        elem.style.color = "orange";
    }
    else if (score <= 29)
    {
        elem.innerHTML = "Your Melanoma Risk Level: High";
        elem.style.color = "red";
    }
    else 
        {
        elem.innerHTML = "Your Melanoma Risk Level: Very High";
        elem.style.color = "maroon";
    }
}