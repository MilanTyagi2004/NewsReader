import React from 'react'


const NewItems=(props)=>{
  
    const {title,description,imgUrl,newsUrl,newsTime,authr,Sourcee} = props;
    return (
      <div>

<div className="card" style={{marginTop:"75px" }}>
<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:'1'}}>
  {Sourcee}
  </span>
  <img src= {imgUrl?imgUrl:"https://t4.ftcdn.net/jpg/02/09/53/11/360_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel='noreferrer' href = {newsUrl} target='_blank' className="btn btn-sm btn btn-dark">click here to read more</a>
    <p className="card-text"><small className="text-muted"> Posted By {authr?authr:"unknown"} on {new Date(newsTime).toGMTString()} ago</small></p>
  </div>
</div>     
 </div>
    )
  
}

export default NewItems
