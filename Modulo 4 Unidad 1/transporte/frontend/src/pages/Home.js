import React from 'react';
const HomePage = (props)=>{
    return(
<main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt=""/>
        </div>
        <div className="columnas">
            <div className="bienvanidos left">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ex voluptatem doloremque libero atque
                    doloribus nemo tempora similique optio magni quia soluta cum dolores repellendus consequuntur ipsam
                    in quod reiciendis!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis culpa perspiciatis laboriosam,
                    laudantium distinctio explicabo non dicta eligendi, blanditiis eaque, adipisci quod officia iste
                    consectetur minus? Laborum ipsum nesciunt voluptas.</p>

            </div>
            <div className="testimonios rigth">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan Perez- zapatos.com</span>
                </div>

            </div>


        </div>
        </main>
    );
}
export default HomePage;