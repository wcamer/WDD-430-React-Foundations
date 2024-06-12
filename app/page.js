import LikeButton from "./like-button";

        function createTitle(title) {
            if (title) {
              return title;
            } else {
              return 'Default title';
            }
          }

        function Header({title}) {
            console.log(title); // { title: "React" }

            return <h1>{title ? title : 'Default title'}</h1>;
        }

         
        export default function HomePage() {
            const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

            

           

            return (
                <div>
                {/* Nesting the Header component */}
                <Header title="React" />
       
                <ul>
                    {names.map((name) => (
                        <li key={name}>{name}</li>
                    ))}
                  </ul>
                  
                    <LikeButton />
                </div>
                
            );
        }

        
        
        
  
    
    
    




