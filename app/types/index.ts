type dataType = 'Branded' | 'Foundation' | 'Survey (FNDDS)' | 'SR Legacy'
type tradeChannel = 'CHILD_NUTRITION_FOOD_PROGRAMS' | 'DRUG' | 'FOOD_SERVICE' | 'GROCERY' | 'MASS_MERCHANDISING' | 'MILITARY' | 'ONLINE' | 'VENDING' | 'NO_TRADE_CHANNEL'

export interface FoodSearchCriteriaProps {
    description: string
    dataType: dataType
    pageSize: number
    pageNumber: number
    sortBy: 'dataType.keyword' | 'lowercaseDescription.keyword' | 'fdcId' | 'publishedDate'
    sortOrder: 'asc' | 'desc'
    brandOwner: string
    tradeChannel: tradeChannel
    startDate: string // YYYY-MM-DD
    endDate: string // YYYY-MM-DD
}

export interface AbridgedFoodNutrient {
    number: number
    name: string
    amount: number
    unitName: string
    derivationCode: string
    derivationDescription: string
}

export interface SearchResultFoodProps {
    fdcId: number
    description: string
    dataType: dataType
    gtinUpc: string
    publishedDate: string
    publicationDate: string
    brandOwner: string
    brandName: string
    ingredients: string
    marketCountry: string
    foodCategory: string
    modifiedDate: string
    dateSource: string
    packageWeight: string
    servingSizeUnit: string
    servingSize: number
    tradeChannels: tradeChannel[]
    allHighlightFields: string
    score: number
    microbes: string[]
    foodNutrients: FoodNutrientProps[]
    labelNutrients: LabelNutrientsProps
    brandedFoodCategory: string
}

export interface SearchResultProps {
    foodSearchCriteria: FoodSearchCriteriaProps
    totalHits: number
    currentPage: number
    totalPages: number
    foods: SearchResultFoodProps[]
}

export interface FoodNutrientProps {
    type: string
    id: string
    amount: string
    nutrient: {
        id: number
        number: string
        name: string
        rank: number
        unitName: string
    }
    foodNutrientDerivation: {
        id: number
        code: string
        description: string
    }
}

export interface LabelNutrientsProps {
    [key: string]: {
        value: string | number
    }
}