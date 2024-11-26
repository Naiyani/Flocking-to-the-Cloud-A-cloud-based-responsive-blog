import { useContext } from "react"
import { EditorContext } from "../pages/editor.pages"

const Tag = ({tag, tagIndex})=>{

    let {blog, blog: {tags}, setBlog} = useContext(EditorContext)

    const handleTagDeletion = () => {
        tags = tags.filter(t => t != tag)
        setBlog({...blog, tags})
    }

    const handleTagEdit = (e) => {
        if(e.keyCode== 13 || e.keyCode==188){
            e.preventDefault();

            let currentTag = e.target.innerText;
            tags[tagIndex] = currentTag;
            setBlog({...blog, tags})
            e.target.setAttribute("contentEditable", false);
        }
    }

    const addEditable = (e) => {
        e.target.setAttribute("contentEditable", true);
        e.target.focus()
    }

    return (
        <div className="relative p-2 mt-2 mr-2 px-5 bg-white rounded-full inline-block hover: bg-opacity-50 pr-10">
            <p className="outline-none" contentEditable="true" onKeyDown={handleTagEdit} onClick={addEditable}>{tag}</p>
            <button className="mt-[2px] rounded-full absolute right-5 top-1/2 -translate-y-1/2" onClick={handleTagDeletion}>
            <i className="fi fi-br-cross text-sm pointer-none"></i>
            </button>
        </div>
    )
}

export default Tag