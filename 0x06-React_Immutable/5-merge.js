import immutable from 'immutable';

const { Map, List } = immutable;

function concatElements(page1, page2) {
	const list1 = List(page1);
	const list2 = List(page2);

	return list1.concat(list2);
}

function mergeElements(page1, page2) {
	const map1 = Map(page1);
	const map2 = Map(page2);

	const mergedMap = map1.merge(map2);

	return List(mergedMap.values());
}
