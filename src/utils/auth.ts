export function isDev(): boolean {
	if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
		return true;
	} else {
		return false;
	}
}