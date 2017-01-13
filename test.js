import path from 'path';
import test from 'ava';
import execa from 'execa';

test(async t => {
	t.is(
		(await execa.stdout('./cli.js')).split(path.delimiter)[0],
		path.join(__dirname, 'node_modules/.bin')
	);
});
