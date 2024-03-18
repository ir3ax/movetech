package binding

import "encoding/json"

type SaveProductRequest struct {
	ImgName          string          `json:"imgName" binding:"required"`
	Img              json.RawMessage `json:"img" binding:"required"`
	Discount         float64         `json:"price" binding:"required"`
	SupplierPrice    float64         `json:"supplierPrice" binding:"required"`
	OriginalPrice    float64         `json:"originalPrice" binding:"required"`
	DiscountedPrice  float64         `json:"discountedPrice" binding:"required"`
	Description1     string          `json:"description1" binding:"required"`
	Description2     json.RawMessage `json:"description2" binding:"required"`
	OriginalQuantity float64         `json:"originalQuantity" binding:"required"`
	CurrentQuantity  float64         `json:"currentQuantity" binding:"required"`
	ProductStatus    string          `json:"productStatus" binding:"required"`
	ProductSold      float64         `json:"productSold" binding:"required"`
	ProductFreebies  string          `json:"productFreebies"`
}
