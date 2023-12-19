import React, { useContext } from "react";
import { myContext } from "../App";
import { useParams } from "react-router-dom";

function Display() {
  const [blog] = useContext(myContext);
  const params = useParams();
  const blogid = params.id;

  return (
    <div>
      <div>
        <h1>{blog[blogid - 1].bloghead} </h1>
      </div>
      <div>
        <p>{blog[blogid - 1].blogdata} </p>
      </div>
      <div>
        <h1>
          Understanding the Role and Evolution of TMF Systems in Clinical
          Research
        </h1>
      </div>
      <div>
        <a>
          After graduating with a Biomedical Science degree, my introduction to
          the field of clinical research began with my first role as a Clinical
          Project Associate in 2006. At the time, the industry was very slowly
          transitioning from paper-based Trial Master Files (TMFs) to electronic
          TMFs. Fast forward to 2023, and in the ever-evolving landscape of
          clinical research, processes and tools have undergone significant
          transformations in recent decades. One of the central tools to undergo
          a radical evolution is the eTMF system. With now over sixteen years in
          the clinical research industry, Ive witnessed firsthand the advances
          in eTMFs and their pivotal role in the research process. With time,
          the adoption of eTMFs increased, and so did my experience with
          implementation, project management and consulting.
        </a>
      </div>
    </div>
  );
}

export default Display;
