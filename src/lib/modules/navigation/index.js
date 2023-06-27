export const makeNavigation = (document) => {
  const navigation = [];
  const documentIndexed = [];
  const children = [];

  let parentCount = 0;
  let object;

	// Creates an array in which the parents and children have an ID so we can find them later
	document.forEach(function (item) {
		if (item.level == 'default') {
			documentIndexed.push(item);
		}

		if (item.level == 'parent') {
			documentIndexed.push(item);
			item.parent = parentCount;
			parentCount = parentCount + 1;
		}

		if (item.level == 'child') {
			documentIndexed.push(item);
			item.child = parentCount - 1;
		}
	});

	// Creates an array with only default links and parents. No children
	documentIndexed.forEach(function (item) {
		if (item.level == 'default') {
			navigation.push(item);
		}

		if (item.level == 'parent') {
			navigation.push(item);
			item.children = [];
		}
	});

	// Creates an extra array just for the children. Save the children!
	documentIndexed.forEach(function (item) {
		if (item.level == 'child') {
			children.push(item);
		}
	});

	// Pushes the children into the "navigation" array in under the matching parent
	children.forEach(function (item) {
		for (let step = 0; step < parentCount; step++) {
			if (item.child == step) {
				object = navigation.find((o) => o.parent === step);
				object.children.push(item);
			}
		}
	});

  return navigation;
}