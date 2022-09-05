// Bu interface'i diğer dosyalarda import edebilmek için export yazdık.
export interface Currency {
    id: string;
    timestamp: number;
    base: string;
    rates: Map<string, number>;
}