import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const listProduits = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.cart.data);
  const items = data.carts.filter((product) => {
    return product.userId == id;
  });
  console.log(items);
  let prixTotal = 0;
  items.map((item) =>
    prixTotal = item.total
  );
  let quantiteTotal = 0;
  items.map((item) =>
   quantiteTotal = item.totalQuantite
  );
  let totalProduits = 0;
  items.map((item) =>
  totalProduits = item.totalProduits
  );

  return (
    <div className="produits">
      <h1>ListProduits</h1>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Pourcentage</th>
            <th>Discount Prix</th>
            <th>Prix</th>
            <th>Quantite</th>
            <th>Total</th>
          </tr>
        </thead>
        
          {items.map((item) =>
            item.products.map((a) => {
              return (<tbody key={a.id}>
                <tr >
                  <td>{a.titre}</td>
                  <td>{a.Pourcentage}</td>
                  <td>{a.discountedPrix}</td>
                  <td>{a.prix}</td>
                  <td>{a.quantite}</td>
                  <td>{a.total}</td>
                </tr></tbody>
              );
            })
          )}
        
        <tfoot>
            <tr>
                <th> Total Price : {prixTotal} </th>
                <th> Quantity Total : {quantiteTotal} </th>
                <th colSpan='5'> Total  Products : {totalProduits} </th>
            </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default listProduits;
