import { displaySubcategories } from './subcategory.js';

export function fetchCategories() {
    const categoryList = document.getElementById('categoryList');
    fetch('public/api/productCategory.json')
        .then(response => response.json())
        .then(data => {
            data.forEach((category, index) => {
                const categoryItem = document.createElement('li');
                categoryItem.classList.add('side__navigation-li');
                const icon = document.createElement('img');
                icon.classList.add('side__navigation-icon');
                icon.src = category.iconUrl || 'default-icon.png'; 
                icon.alt = category.name;
                const title = document.createElement('span');
                title.classList.add('side__navigation-title');
                title.textContent = category.name;
                categoryItem.appendChild(icon);
                categoryItem.appendChild(title);
                categoryList.appendChild(categoryItem);
                if (index === 0) {
                    categoryItem.classList.add('side__navigation--active');
                    displaySubcategories(category.childItems); 
                }
                categoryItem.addEventListener('click', () => {
                    const allCategories = document.querySelectorAll('.side__navigation-li');
                    allCategories.forEach(item => item.classList.remove('side__navigation--active'));
                    categoryItem.classList.add('side__navigation--active');
                    displaySubcategories(category.childItems);
                });
            });
        })
        .catch(error => {
            console.error('Error fetching the categories:', error);
        });
}
