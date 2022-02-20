import React from 'react';
import '../styles/components/pages/NosotrosPage.css';
const NosotrosPage = (props) => {
    return (
        <div className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam illo quis repellat nisi a sint ad asperiores iusto quibusdam nam quos quia dignissimos reprehenderit, qui eos sed omnis quo esse?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe harum dolorum culpa voluptate, facilis corporis quo porro reprehenderit quaerat repellat in odio tenetur doloribus accusantium nobis soluta autem ea totam.</p>
            </div>
            <h2>Staff</h2>
                
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="" />
                        <h5>Juan Gomez</h5>
                        <h6>Gerente gral.</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus iure recusandae illum dicta, vitae ipsa nihil, distinctio inventore excepturi, harum ipsam? Vel cupiditate atque non nesciunt! Ad consequuntur hic inventore?</p>

                    </div>
                </div>
            </div>



        
    );
}
export default NosotrosPage;