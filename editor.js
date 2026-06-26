const heroWrapper = document.querySelector(".hero-wrapper");
const heroEditor = document.querySelector(".hero-editor");
heroWrapper.addEventListener("mouseenter", () => {
  heroEditor.classList.add("hovered");
  setTimeout(() => {
    heroEditor.style.opacity = "1";
    heroEditor.innerHTML = `
    <div class="editor">
                <div class="editor-header">
                  <span class="red"></span>
                  <span class="yellow"></span>
                  <span class="green"></span>
    
                  <p style="margin-left: 5px">portfolio.js</p>
                </div>
    
                <div class="editor-body">
                  <pre><code><span class="keyword">const</span> developer = {
  <span class="property">name</span>: <span class="string">"Aditya Sharma"</span>,
  <span class="property">role</span>: <span class="string">"CS Student"</span>,
  <span class="property">skills</span>: [
      <span class="string">"HTML"</span>,
      <span class="string">"CSS"</span>,
      <span class="string">"JavaScript"</span>,
      <span class="string">"C++"</span>
  ],
  <span class="property">openToWork</span>: <span class="boolean">true</span>
}</code></pre>
                </div>
              </div>
            `;
    heroEditor.querySelector("div").style.transform = "rotateY(180deg)";
  }, 400);
});
heroWrapper.addEventListener("mouseleave", () => {
  heroEditor.classList.remove("hovered");
  setTimeout(() => {
    heroEditor.style.opacity = "0.8";
    heroEditor.querySelector("div").style.transform = "rotateY(0deg)";
    heroEditor.innerHTML = `
    <div class="editor">
                <div class="editor-header">
                  <span class="red"></span>
                  <span class="yellow"></span>
                  <span class="green"></span>

                  <p style="margin-left: 5px">portfolio.js</p>
                </div>

                <div class="editor-body">
                  <pre><code><span class="keyword">const</span> developer = {
  <span class="property">name</span>: <span class="string">""</span>,
  <span class="property">role</span>: <span class="string">""</span>,
  <span class="property">skills</span>: [
      <span class="string">""</span>,
      <span class="string">""</span>,
      <span class="string">""</span>,
      <span class="string">""</span>
  ],
  <span class="property">openToWork</span>: <span class="boolean"></span>
}</code></pre>
                </div>
              </div>`;
  }, 400);
});
