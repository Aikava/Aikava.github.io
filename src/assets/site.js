const employments = document.querySelector(".employments-list");

const mountEmployments = async () => {
    const response = await fetch("./assets/employments.json");
    const data = await response.json();

    const positions = data.map((item) => {
        const elem = document.createElement("li");
        elem.innerHTML = `<pre>
<b>${item.company}</b>
${item.dates.start} - ${item.dates.end}
${item.position}
<p style="white-space:break-spaces;">${item.responsibilities.join("<br/><br/>")}</p>
</pre>`;

        return elem;
    });

    employments.append(...positions);
};

void mountEmployments();