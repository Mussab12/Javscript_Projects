// items
const menu=[
{
id:1,
title:"Spicy Chicken",
category:"breakfast",
price:15.99,
img:"../PICS/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.webp",
desc:`Yummy chicken i love it. Chicken has lot of proteins`,
},
{
    id:2,
    title:"Pasteries",
    category:"lunch",
    price:13.99,
    img:"../PICS/Gooey-Brownies-5627e49.jpg",
    desc:`Yummy chicken i love it. Chicken has lot of proteins`,
    },
    {
        id:3,
        title:"Cake",
        category:"shakes",
        price:13.99,
        img:"../PICS/9266919-c023924050f9406bab6eccea1664e88b.jpg",
        desc:`Yummy chicken i love it. Chicken has lot of proteins`,
        },
        {
            id:4,
            title:"Brownies",
            category:"lunch",
            price:13.99,
            img:"../PICS/Gooey-Brownies-5627e49.jpg",
            desc:`Yummy chicken i love it. Chicken has lot of proteins`,
            },
            {
                id:5,
                title:"Pasteries",
                category:"lunch",
                price:13.99,
                img:"../PICS/miso-caramel-apple-danish-FT-RECIPE0920-005dcb017b23462383ea77c4549b1a44.jpg",
                desc:`Yummy chicken i love it. Chicken has lot of proteins`,
                },



];
const sectionCenter=document.querySelector('.section-center');
const container=document.querySelector('.btn');
// here we moved filterBtns to the place where we add categories dynamically because
// now we are adding button dynamically so when javascript loads it gets undefined value   
// const filterBtns=document.querySelectorAll('.filter-btn');
// load items
window.addEventListener('DOMContentLoaded',function(){
    // console.log("Shake Shake");

   displayMenuItems(menu);
   displayCategoryItems();
   
});
// filter items


function displayMenuItems(menuItems){
    let displayMenu=menuItems.map(function(item){
        // console.log(item);

       return `  
       <div class="menu-container">
       <div class="menu-items">
         <img
           src=${item.img}
           alt="${item.title}"
           class="responsive"
         />
         <h4>${item.title}</h4>
         <p>
           ${item.desc}
         </p>
       </div>
       <div class="menu-items">
         <img
           src=${item.img}
           class="responsive"
           alt="${item.title}"
         />
         <h4>${item.title}</h4>
         <p>
         ${item.desc}
         </p>
       </div>
     </div>`;
    });
    displayMenu=displayMenu.join('');
    sectionCenter.innerHTML=displayMenu;
}
function displayCategoryItems()
{
  const categories=menu.reduce(function(values,item){
    if(!values.includes(item.category)){
        values.push(item.category);
    }
    return values;
       },
       ['all']
    );
    const categoryBtns=categories.map(function(category){
        return `
        <button class="btn-design filter-btn" type="button" data-id=${category}>
        ${category}
            </button>`
    
    }).join('');
    container.innerHTML=categoryBtns;
    const filterBtns=container.querySelectorAll('.filter-btn');
    filterBtns.forEach(function(btn)
    {
        btn.addEventListener('click',function(e){
            const category=e.currentTarget.dataset.id;
            const menuCategory=menu.filter(function(menuItem){
                if(menuItem.category==category){
                return menuItem;
                }
            });
            if(category=='all')
            {
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(menuCategory);
            }
    
        });
    
    });
    
  
}