export interface Service {
    id:number;
    code: number;
    desc: string;
    date: Date;
    cost: number;
  }


export interface Customer {
    id:number;
    firstName: string;
    lastName: string;
    year: number;
    make: string;
    model: string;
    service: Service[];
}
