import type { JSX } from "react";

import Button from "@component/Button/Button.component";
import CodeEditor from "./components/Code-Editor.component";
import FileExplorer from "./components/File-Explorer.component";

export default function Page(): JSX.Element {
	return(
		<div className="fc-n-n-xs">
			<div className="fr-n-fe-n">
				<Button>
					<svg width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2h0a2 2 0 0 0-2 2v0a2 2 0 0 1-1 2H8a2 2 0 0 1-2 0h0a2 2 0 0 0-3 1h0a2 2 0 0 0 1 3h0a2 2 0 0 1 1 2v0a2 2 0 0 1-1 2h0a2 2 0 0 0-1 3h0a2 2 0 0 0 3 1h0a2 2 0 0 1 2 0h1a2 2 0 0 1 1 2v0a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v0a2 2 0 0 1 1-2h1a2 2 0 0 1 2 0h0a2 2 0 0 0 3-1h0a2 2 0 0 0-1-3h0a2 2 0 0 1-1-2v0a2 2 0 0 1 1-2h0a2 2 0 0 0 1-3h0a2 2 0 0 0-3-1h0a2 2 0 0 1-2 0h-1a2 2 0 0 1-1-2v0a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
				</Button>
			</div>
			<div className="fr-n-n-m">
				<FileExplorer/>
				<CodeEditor/>
			</div>
		</div>
	);
};