package binding

type SaveFreebiesRequest struct {
	FreebiesName             string  `json:"freebiesName" binding:"required"`
	FreebiesImg              []byte  `json:"freebiesImg"`
	FreebiesStorePrice       float64 `json:"freebiesStorePrice" binding:"required"`
	FreebiesOriginalQuantity float64 `json:"freebiesOriginalQuantity" binding:"required"`
	FreebiesCurrentQuantity  float64 `json:"freebiesCurrentQuantity" binding:"required"`
}
