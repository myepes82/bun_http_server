export default interface RequestsGroup{
    path: string;
    handler(req: Request): Response | any; 
}