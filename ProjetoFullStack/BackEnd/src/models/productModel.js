
const dbConnection = require("../../db/dbConnection");

class ProductModel {
  
  executeSQL(sql, parametros = "") {
    
    return new Promise( function (resolve, reject) {
        
       
        dbConnection.query(sql, parametros, function (error, resposta) {
          
          if (error) {
            return reject(error);
          }

          return resolve(resposta);
        });

      }
    );
  }

  readList() {
    const sql = `SELECT 
      Product.IdProduct, 
      Product.ProductName, 
      Product.CostPrice, 
      Product.SalePrice, 
      Product.IdClientSupplier,
      ClientSupplier.ClientSupplierName,
      ProductGroup.IdGroup,
      ProductGroup.GroupName,
      Product.IdSubGroup, 
      SubGroup.SubGroupName,
      Product.IdStore,
      Store.StoreName,
      Product.IdUser, 
      User.UserName,
      Product.RegistrationDate, 
      Product.Sold, 
      Product.Active 
    FROM Product
    JOIN Store ON Product.IdStore = Store.IdStore
    JOIN User ON Product.IdUser = User.IdUser
    JOIN ClientSupplier ON Product.IdClientSupplier = ClientSupplier.IdClientSupplier
    JOIN SubGroup ON Product.IdSubGroup = SubGroup.IdSubGroup
    JOIN \`ProductGroup\` ON SubGroup.IdGroup = \`ProductGroup\`.IdGroup`;
    return this.executeSQL(sql); 
}



  read(id) {
    const sql = `SELECT 
        Product.IdProduct, 
        Product.ProductName, 
        Product.CostPrice, 
        Product.SalePrice, 
        Product.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        ProductGroup.IdGroup,
        ProductGroup.GroupName,
        Product.IdSubGroup, 
        SubGroup.SubGroupName,
        Product.IdStore,
        Store.StoreName,
        Product.IdUser, 
        User.UserName,
        Product.RegistrationDate, 
        Product.Sold, 
        Product.Active 
      FROM Product
      JOIN Store ON Product.IdStore = Store.IdStore
      JOIN User ON Product.IdUser = User.IdUser
      JOIN ClientSupplier ON Product.IdClientSupplier = ClientSupplier.IdClientSupplier
      JOIN SubGroup ON Product.IdSubGroup = SubGroup.IdSubGroup
      JOIN \`ProductGroup\` ON SubGroup.IdGroup = \`ProductGroup\`.IdGroup 
      WHERE Product.IdProduct = ?`; 
    return this.executeSQL(sql, id); 
  }

  search(parametro) {
    const sql = `
      SELECT 
        Product.IdProduct, 
        Product.ProductName, 
        Product.CostPrice, 
        Product.SalePrice, 
        Product.IdClientSupplier,
        ClientSupplier.ClientSupplierName,
        ProductGroup.IdGroup,
        ProductGroup.GroupName,
        Product.IdSubGroup, 
        SubGroup.SubGroupName,
        Product.IdStore,
        Store.StoreName,
        Product.IdUser, 
        User.UserName,
        Product.RegistrationDate, 
        Product.Sold, 
        Product.Active 
      FROM Product
      JOIN Store ON Product.IdStore = Store.IdStore
      JOIN User ON Product.IdUser = User.IdUser
      JOIN ClientSupplier ON Product.IdClientSupplier = ClientSupplier.IdClientSupplier
      JOIN SubGroup ON Product.IdSubGroup = SubGroup.IdSubGroup
      JOIN ProductGroup ON SubGroup.IdGroup = ProductGroup.IdGroup 
      WHERE Product.IdProduct = ? 
        OR Product.ProductName LIKE ? 
        OR ClientSupplier.ClientSupplierName LIKE ? 
        OR ProductGroup.GroupName LIKE ? 
        OR SubGroup.SubGroupName LIKE ? 
        OR Store.StoreName LIKE ?`;
    const values = [
      parametro, 
      `%${parametro}%`, 
      `%${parametro}%`, 
      `%${parametro}%`, 
      `%${parametro}%`, 
      `%${parametro}%`
    ];
    return this.executeSQL(sql, values);
  }
  

  create(newProduct) {
    const sql = "INSERT INTO Product SET ?"; 
    return this.executeSQL(sql, newProduct);
  }

  update(updateProduct, id) {
    const sql = "UPDATE Product SET ? WHERE IdProduct = ?";
    return this.executeSQL(sql, [updateProduct, id]); 
  }

}

module.exports = new ProductModel();
