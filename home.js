function Home(){
   
    return(
        <Card
            bgcolor="primary"
            txtcolor = "black"
            header="BadBank Landing Page"
            title="Welcome to the bank"
            text="For all your banking needs."
            body={(<img src="bankOfAmerica.png" className="img-fluid" alt="Responsive image"/>)}
        />
    );
}