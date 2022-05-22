import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="flex d-tree-container flex-col">
        {data.map((tree, idx) => (
          <TreeNode node={tree} key={idx} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  return (
    <li className="d-tree-node border-0 text-white">
      <div className="flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
            <FontAwesomeIcon icon="fa-caret-right" />
          </div>
        )}

        <div className="basis-0 grow max-w-full px-3">
          {/* <i className={`mr-1 ${node.icon}`}> </i> */}
          {node.username}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="list-none p-0">
          <ul className="flex d-tree-container flex-col">
            <Tree data={node.children} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Tree;