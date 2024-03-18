package models

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type FreebiesData struct {
	FreebiesId               uuid.UUID      `gorm:"type:uuid;primaryKey;default:uuid_generate_v4()"`
	FreebiesName             string         `gorm:"type:text"`
	FreebiesImg              string         `gorm:"type:text"`
	FreebiesOriginalQuantity float64        `gorm:"type:decimal(10, 2);"`
	FreebiesCurrentQuantity  float64        `gorm:"type:decimal(10, 2);"`
	CreatedBy                uuid.UUID      `gorm:"type:uuid"`
	CreatedAt                time.Time      `gorm:"type:timestamptz;autoCreateTime"`
	UpdatedBy                uuid.UUID      `gorm:"type:uuid"`
	UpdatedAt                time.Time      `gorm:"type:timestamptz;autoUpdateTime"`
	DeletedAt                gorm.DeletedAt `gorm:"softDelete: true"`
}

func (FreebiesData) TableName() string {
	return "movetech_product_freebies"
}

func (p FreebiesData) GetFreebiesId() uuid.UUID {
	if p.FreebiesId == uuid.Nil {
		return uuid.UUID{}
	}
	return p.FreebiesId
}

func (p FreebiesData) GetFreebiesName() string {
	if p.FreebiesName == "" {
		return ""
	}

	return p.FreebiesName
}

func (p FreebiesData) GetFreebiesImg() string {
	if p.FreebiesImg == "" {
		return ""
	}

	return p.FreebiesImg
}

func (p FreebiesData) GetFreebiesOriginalQuantity() float64 {
	if p.FreebiesOriginalQuantity == 0 {
		p.FreebiesOriginalQuantity = 0
	}

	return p.FreebiesOriginalQuantity
}

func (p FreebiesData) GetFreebiesCurrentQuantity() float64 {
	if p.FreebiesCurrentQuantity == 0 {
		p.FreebiesCurrentQuantity = 0
	}

	return p.FreebiesCurrentQuantity
}
