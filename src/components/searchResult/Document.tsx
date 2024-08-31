import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function OneDocument({ document }: { document: any }) {

  const [cont, setCont] = useState<any>();

  const {
    issueDate,
    source,
    attributes,
    title,
    content,
    url
  } = document.ok;


  const dateDoc = new Date(issueDate);

  useEffect(() => {
    let oParser = new DOMParser();
    let oDOM = oParser.parseFromString(content.markup, "application/xml");
    setCont(oDOM.documentElement.innerHTML);

  }, [content.markup])


  return (
    <div className="document">
      <div>
        <span className="document__date">
          {`${dateDoc.getDay()}.${dateDoc.getMonth()}.${dateDoc.getFullYear()}`}
        </span>
        <span className="document__source">{source.name}</span>
      </div>
      <p className="document__title">
        {title.text}
      </p>
      <div>
        {attributes.isTechNews &&
          <p className="document__news">Технические новости</p>
        }
        {attributes.isAnnouncement &&
          <p className="document__news">Aнонсы и события</p>
        }
        {attributes.isDigest &&
          <p className="document__news">Cводки новостей</p>
        }
      </div>

      <div className="document__img">
        <img src="/images/search-result/document.png" alt="document" />
      </div>

      <p className="document__description">
        <div dangerouslySetInnerHTML={{ __html: cont }} />
      </p>

      <div className="document__more-info">
        {(url as string).length > 0 ?
          <Link to={url} target="_blank">
            <button className="hover cursor">Читать в источнике</button>
          </Link> :
          <button className="hover cursor">Читать в источнике</button>
        }
        <span>{attributes.wordCount} слова</span>
      </div>
    </div >
  )
}

export default OneDocument