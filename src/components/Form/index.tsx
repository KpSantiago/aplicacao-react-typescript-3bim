import "./style.css";

export const Form = () => {
    return (
        <>
            <form className="form">
                <div>
                    <input type="text" name="nameUser" id="nameUser" className="input" placeholder="Your name"/>
                </div>
                <div>
                    <input type="email" name="emailUser" id="emailUser" className="input" placeholder="Your e-mail"/>
                </div>
                <div className="message">
                    <textarea name="massage" id="message" placeholder="Your message" cols={30} rows={10}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}