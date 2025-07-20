export type TUseConfirmReturn<D> = {
	data?: D
	isVisible: boolean
	confirm: TUseConfirmConfirm
	respond: TUseConfirmRespond
};

export type TUseConfirmConfirm = <V>(data: any) => Promise<V>;

export type TUseConfirmRespond = <V>(value: V) => void;