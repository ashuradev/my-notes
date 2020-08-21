function build1(x: number, y = 'eae') {}

function build2(x: number, y?: string) {}

build1(1);
build1(1, undefined);
build1(1, 'suave');
build2(1);
build2(1, 'blz');
build2(1, undefined);
