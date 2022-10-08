import React, { useState } from "react"
import { TiSocialFacebook, TiSocialGithub, TiSocialLinkedin, TiSocialYoutube } from 'react-icons/ti';
import '../generalStyles.scss'
export const Team = () => {
    const [showAvatar, setShowAvatar] = useState(false);
    const team = {
        logo: undefined,
        name: "probando",
        city: 'Bogota'
    }
    const onOpenLink = (link = "https://www.google.com") =>{
        console.log("is working", link)
        window.open(link, '_blank')
    }

    const cardMember = (memberName = undefined) => {
        return (
            <div className="card-team">
                <img className="avatar-team" ></img>
                <div>
                    <div className="team-name"> {memberName}</div>
                    <div className="team-description"> Este es un ejemplo de descripcion de uno de los miembros del equipo,
                        Este es un ejemplo de descripcion de uno de ls miembros del equipo,  </div>
                    <div className="card-footer-social-media">
                        <p>Redes sociales</p>
                        <div className = "card-footer-media-container">
                        <TiSocialGithub className="github-logo" onClick={()=> {onOpenLink('https://www.github.com')} }/>
                        <TiSocialFacebook className="github-logo"  />
                        <TiSocialLinkedin className="github-logo" onClick={()=> {onOpenLink()}} />
                        <TiSocialYoutube className="github-logo" />

                        </div>

                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {cardMember("Juan")}
            {cardMember("Gabriel")}
            {cardMember("Santiago")}


        </>
    )
}