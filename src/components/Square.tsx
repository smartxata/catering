  import "../assets/syntez.css"

  export default function Square( props: any) {
         
 
    return (
 
               
                       
          <div className="col-md-3 cat-box">
                      <a href="#" className="brand">

              <div className="catering" >
                 {props.title}
              </div>
              <div className="brandSlogan rshift">
              {props.supSlogan}
              </div> <div className="brandSlogan lshift">
              {props.subSlogan}
              </div>
              </a>
            </div>
     
               
 
            );
 }

 //color: silver, text-shadow: 