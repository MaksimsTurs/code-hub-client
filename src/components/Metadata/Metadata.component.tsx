import type { TMetadataProps } from "./Metadata.component.type";

import { Fragment } from "react/jsx-runtime";

export default function Metadata(props: TMetadataProps) {
  return(
    <Fragment>
      {props.title && <title>{props.title}</title>}
      {props.meta.map(data => (<meta key={data.name} name={data.name} content={data.content}/>))}
    </Fragment>
  );
};