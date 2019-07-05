const root = document.createElement('div');
document.body.appendChild(root);

const temp = `
<p>
<span>this is a test.</span>
</p>
<p>
<span>this is a test.</span>
</p>
<p>
<span>this is a test.</span>
</p>
<p>
<span>this is another paragraph.</span>
</p>
`;

root.innerHTML = temp;


document.addEventListener('select', (e) => {

  console.log('select');
  
})

document.addEventListener('selectstart', (e) => {

  console.log('selectstart');
  
})

document.addEventListener('selectend', (e) => {

  console.log('selectend');
  
})

document.addEventListener('selectionchange', (e) => {

  console.log('selectionchange', document.getSelection());

  
  
})


