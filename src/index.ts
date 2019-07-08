import './style.less';

const root = document.createElement('div');
document.body.appendChild(root);

const temp = `
<div class="doc-editor">
  <div class="toolbox"></div>
  <div class="doc-container">
    <div class="doc">
      <p>
        <span>this is a para 1.</span>
      </p>
      <p>
        <span>this is a para 2.</span>
      </p>
      <p>
        <span>this is a para 3.</span>
      </p>
      <p>
        <span>this is a para 4.</span>
      </p>
    </div> 
    <div class="comment-list"></div> 
  </div>
</div>
`;

root.innerHTML = temp;

const OFFSET = 3;

const commentContainer: Element | null = document.querySelector('.comment-list');
const docContainer: Element | null = document.querySelector('.doc-container');
const doc: Element | null = document.querySelector('.doc');

(window as any).doc = doc;


function addComment() {
  let range: Range;
  let rect: DOMRect;
  let left: number = -100;
  let top: number = -100;

  const selection = document.getSelection();
  if (!selection || selection.isCollapsed) {
    return;
  }

  range = selection.getRangeAt(0);
  rect = range.getClientRects()[0] as DOMRect;
  

  
  
  left = rect.x - (docContainer!.getClientRects()[0] as DOMRect).x;
  top = rect.y - (doc!.getClientRects()[0] as DOMRect).y;

  let startPoint = {
    x: left + OFFSET,
    y: top - OFFSET,
  };

  let controlPoint = {
    x: startPoint.x + OFFSET,
    y: startPoint.y - OFFSET
  }

  let endPoint = {
    x: (docContainer!.getClientRects()[0] as DOMRect).width - 210,
    y: controlPoint.y
  }

  const svgWidth = (docContainer!.getClientRects()[0] as DOMRect).width - left - 210;



  const text = "this is a comment!!!";
  const div1 = document.createElement('div');
  div1.className = 'comment';

  const commentEle = document.createElement('div');
  commentEle.className = 'comment-box';
  commentEle.style.top = `${top}px`;
  commentEle.innerHTML = `
  ${text}
  `;

  // viewBox="0 0 4681 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2309" xmlns:xlink="http://www.w3.org/1999/xlink" width="914.2578125" height="200"
  
  div1.appendChild(commentEle);
  addSvg(div1, svgWidth, left, top);
  
  commentContainer!.appendChild(div1);
}

(window as any).addComment = addComment;



function addSvg(container: any, svgWidth: number, left: number, top: number) {
  const svgArrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgArrow.setAttribute('class', 'comment-arrow');
  svgArrow.setAttribute('width', String(svgWidth));
  svgArrow.setAttribute('height', String(svgWidth/10));
  svgArrow.setAttribute('viewBox', '0 0 1000 100');

  svgArrow.style.width = `${svgWidth}px`;
  svgArrow.style.height = `${svgWidth / 10}px`;
  svgArrow.style.left = `${left + OFFSET}px`;
  svgArrow.style.top = `${top - 10}px`;

  svgArrow.innerHTML = `
  <path 
    d="M10 20,50 10,980 10,990 20" 
    stroke="red" 
    fill="transparent"
    stroke-dasharray="10 1" 
    stroke-width="5"
  >
  </path> 
  `;

  container.appendChild(svgArrow);

}




doc!.addEventListener('select', (e) => {

  console.log('select');
  
})

doc!.addEventListener('selectstart', (e) => {

  console.log('selectstart');
  
})

doc!.addEventListener('selectend', (e) => {

  console.log('selectend');
  
})

doc!.addEventListener('selectionchange', (e) => {

  console.log('selectionchange', document.getSelection());

    
})


