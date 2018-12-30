import React, { Component } from 'react';

export default class BotonMas extends Component {



    constructor(props) 
    {

    super(props)
    this.UrlsFondos();   
    this.EstilizarFondo();
    

    }



          
    EstilizarFondo()
    {
        this.EstiloFondo = {
            
            color: 'white',
            backgroundImage: "url(" + this.fondo + ")",
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            backgroundSize: 'cover'
        }
    }

    UrlsFondos()
    {
        this.fondo = "https://fotografias.antena3.com/clipping/cmsimages02/2015/10/27/6A638DA2-F014-4FCE-BC05-7FB0BDBFABE1/58.jpg";
    }
   





    
    Abrir(e)
    {
       
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.classList.add('Visible');
       Falso.classList.add('Largo');
       Tit.classList.add('FondoTrans');
      
       

    }

    Cerrar(e)
    {
       
       var sino     = this.refs.Sino;
       var Falso    = this.refs.RefFF;
       var Tit      = this.refs.RefTit;
       sino.style.height = '';
       sino.classList.remove('Visible');
       Falso.classList.remove('Largo');
       Tit.classList.remove('FondoTrans');
        

       

    }
    
    







   

    

    render() {
        
        return (

            <a href={'/pelicula'}>
                <div className = "ContienePelicula" style = {this.EstiloFondo} onMouseLeave={this.Cerrar.bind(this)} onMouseOver={this.Abrir.bind(this)} onLoad={this.Cerrar.bind(this)} ref="RefPeli"  >
                    <div className = "Pelicula" >
                        <div className = "FalsoFondo" ref="RefFF">
                             <div className="ContienePuntuaciones">
                                10
                            </div>
                            <div className="ContienePoster">
                                <img src="{this.props.movie.poster_path}"/>
                            </div>
                            <div className = "ContieneTituloSinopsis">
                            <div className="ContieneTitulo Mas" ref="RefTit">
                                    <p> Ver Más</p>
                                </div>
                                <div className="ContieneSinopsis" ref="Sino">
                                    <p>Ver más peliculas Populares</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </a>







      );
    }
}

