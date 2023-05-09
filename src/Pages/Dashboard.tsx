import { GenericModalForm } from "../components/GenericCreateModalForm";
import { PageTitle } from "../components/pageTitle";
import { CreateItem } from "./Consumable/CreateItem";

export const Dashboard = () =>{

    return (
        <div> 
            <PageTitle> Dashboard </PageTitle> 


            <GenericModalForm/>

        </div> 
    );
}