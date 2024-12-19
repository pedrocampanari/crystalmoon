class App {
    async getProducts(local) {
        const response = await fetch('/products');
        const data = await response.json();
        return this.drawProduct(local, data);
    }

    async addNewProduct(body) {
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                productName: 'New Product',
                price: 10.99,
                category: 1,
                images_url: [
                    'https://example.com/image1.jpg',
                    'https://example.com/image2.jpg',
                ]
            })
        }

        const response = await fetch('/addNewProduct', options);
        const data = await response.json();
        return data;
    }


    editProduct() {
        console.log('Editando...')
    }

    removeProduct() {
        console.log('Removendo...')
    }






    enableButtons() {
        const buttonAddNewProduct = document.querySelector('.btn-add-product');
        const buttonEditProduct = document.querySelector('.btn-edit-product');
        const buttonRemoveProduct = document.querySelector('.btn-remove-product');

        buttonAddNewProduct.addEventListener('click', this.addNewProduct);

        console.log(buttonEditProduct[0])

        buttonEditProduct.forEach(button => {
            button.addEventListener('click', this.editProduct);
        });

        buttonRemoveProduct.forEach(button => {
            button.addEventListener('click', this.removeProduct);
        });
    }













    drawProduct(local, data) {
        data.forEach(element => {
            const card = document.createElement('div');
            card.classList.add('card', 'card-product');
            card.setAttribute("id", element._id);

            const cardBody = document.createElement('div');
            cardBody.classList.add('card-body');

            const container = document.createElement('div');
            container.classList.add('container');

            const row = document.createElement('div');
            row.classList.add('row');

            // Image column
            const imageCol = document.createElement('div');
            imageCol.classList.add('col', 'photo-product-mini');
            const image = document.createElement('img');
            image.src = element.images_url[0];
            image.alt = 'Imagem produto';
            imageCol.appendChild(image);

            // Product details column
            const detailsCol = document.createElement('div');
            detailsCol.classList.add('col-8');
            const productName = document.createElement('h3');
            productName.textContent = `${element.productName}`;
            const category = document.createElement('p');
            category.textContent = `Categoria: ${element.category}`;
            const price = document.createElement('p');
            price.textContent = `Preço: R$ ${element.price}`;
            const date = document.createElement('p');
            date.textContent = `Última modificação: ${element.changed}`;
            detailsCol.appendChild(productName);
            detailsCol.appendChild(category);
            detailsCol.appendChild(price);
            detailsCol.appendChild(date);

            // Buttons column
            const buttonsCol = document.createElement('div');
            buttonsCol.classList.add('col', 'box-btn-controls');
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.setAttribute('class', 'btn-edit-product')
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.setAttribute('class', 'btn-remove-product')
            buttonsCol.appendChild(editButton);
            buttonsCol.appendChild(removeButton);

            row.appendChild(imageCol);
            row.appendChild(detailsCol);
            row.appendChild(buttonsCol);
            container.appendChild(row);
            cardBody.appendChild(container);
            card.appendChild(cardBody);

            local.appendChild(card);
        });
    }

    start() {
        const productsList = window.document.getElementById('getProducts');

        this.getProducts(productsList);
        this.enableButtons();
    }
}

const app = new App();
app.start();