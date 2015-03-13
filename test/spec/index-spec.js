KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('qrcode', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/qrcode/2.0.1/']});