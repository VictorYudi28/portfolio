import { contact } from "@/data/contact"
import { Title } from "./Title"

export const GetInTouch = ()=> {

    return(
        <div className="text-center mt-20 mb-10">
            <Title
            fontSize="text-4xl"
            text="Get in Touch"
            />
            <div className="mt-5 flex flex-col gap-1">
                <p>{contact.location}</p>
                <p>{contact.cellPhoneNumber}</p>
                <p>{contact.email}</p>
            </div>
        </div>
    )

}