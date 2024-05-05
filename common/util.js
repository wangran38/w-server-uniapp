export function isBlank(data) {
	return data === null || data === undefined || data === '';
}

export function uuid() {
  var temp_url = URL.createObjectURL(new Blob());
  var uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
}

export function copyJson(data) {
	if (isBlank(data)) {
		return data;
	}
	return JSON.parse(JSON.stringify(data));
}

export const assessmentUtil = {
	getDataListByLevel(list, level) {
		if (!Array.isArray(list)) {
			return [];
		}
		return list.filter(item => {
			return item.level === level;
		});
	},
	getRootData(list) {
		return this.getDataListByLevel(list, 0);
	},
	getChildrenTreeById(data, id) {
		let result = null;
		if (Array.isArray(data)) {
			for (let i = 0; i < data.length; i++) {
				const element = data[i];
				if (element.id === id) {
					return element.children || null;
				}
				if (element.children && element.children.length > 0) {
					result = this.getChildrenTreeById(element.children, id);
					if (result) {
						return result;
					}
				}
			}
			return null;
		}
		if (data.id === id) {
			return data.children || null;
		}
		if (data.children && data.children.length > 0) {
			result = this.getChildrenTreeById(data.children, id);
			if (result) {
				return result;
			}
		}
		return null;
	},
	getDataTreeById(tree, id) {
		let result = null;
		if (Array.isArray(data)) {
			for (let i = 0; i < data.length; i++) {
				const element = data[i];
				if (element.id === id) {
					return element;
				}
				if (element.children && element.children.length > 0) {
					result = this.findElementById(element.children, id);
					if (result) {
						return result;
					}
				}
			}
			return null;
		}
		if (data.id === id) {
			return data;
		}
		if (data.children && data.children.length > 0) {
			result = this.findElementById(data.children, id);
			if (result) {
				return result;
			}
		}
		return null;
	},
	findElementById(data, id) {
		let result = null;
		if (Array.isArray(data)) {
			for (let i = 0; i < data.length; i++) {
				const element = data[i];
				if (element.id === id) {
					return element;
				}
				if (element.children && element.children.length > 0) {
					result = this.findElementById(element.children, id);
					if (result) {
						return result;
					}
				}
			}
			return null;
		}
		if (data.id === id) {
			return data;
		}
		if (data.children && data.children.length > 0) {
			result = this.findElementById(data.children, id);
			if (result) {
				return result;
			}
		}
		return null;
	},
};