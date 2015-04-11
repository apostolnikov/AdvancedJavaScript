Object.prototype.extends = function (parent) {       
	Student.prototype.constructor = Student;         
    if (!Object.create) {
        Object.prototype.create = function (proto) {
            function F() {
            };
            F.prototype = proto;
            return new F;
        };
    }

    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

var Point2D = (function () {
    function Point2D(x, y) {
        this._x = x;
        this._y = y;
    }

    Point2D.prototype.getX = function () {
        return this._x;
    };

    Point2D.prototype.getY = function () {
        return this._y;
    };

    return Point2D;
})();

var Shape = (function () {
    function Shape(point, color) {
        if (this.constructor === Shape) {
            throw new Error('Recipe cannot be instantiated!'); // ne dava da se suzdade Shape ... abstracten
        }
        this._point = point;
        this._color = color;
    }

    Shape.prototype.getPoint = function() {
        return this._point;
    };

    Shape.prototype.getColor = function() {
        return this._color;
    };

    Shape.prototype.toString = function () {
        var result = this.constructor.name + ' - ' +
            'X: ' + this._point._x +
            ', Y: ' + this._point._y +
            ' Color: ' + this._color;

        return result;
    }
    return Shape;
}

var Circle = (function () {
    function Circle(point, radius, color) {
        Shape.call(this, point, color);
        this._radius = radius;
    }

    Circle.extends(Shape);

    Circle.prototype.getRadius = function () {
        return this._radius;
    };

    Circle.prototype.toString = function () {
        var result = Shape.prototype.toString.call(this) +
            ', Radius: ' + this._radius;

        return result;
    };

    return Circle;
})();

var Rectangle = (function () {
    function Rectangle (point, width, height, color) {
        Shape.call(this, point, color);
        this._width = width;
        this._height = height;
    }

    Rectangle.extends(Shape);

    Rectangle.prototype.getWidth = function() {
        return this._width;
    };
    Rectangle.prototype.getHeight = function() {
        return this._height;
    };

    Rectangle.prototype.toString = function() {
        return Shape.prototype.toString.call(this) + ', Width: ' + this._width + ', Height: ' + this._height;
    };

    return Rectangle;
}());


var Triangle = (function () {
    function Triangle (point, pointB, pointC, color) {
        Shape.call(this, point, color);
        this._pointB = pointB;
        this._pointC = pointC;
    }
    Triangle.extends(Shape);

    Triangle.prototype.getPointB = function() {
        return this._pointB;
    };

    Triangle.prototype.getPointC = function() {
        return this._pointC;
    };

    Triangle.prototype.toString = function() {
        return Shape.prototype.toString.call(this) + ', Point B: ' + this._pointB + ', Point C: ' + this._pointC;
    };

    return Triangle;

}());

var Line = (function () {
    function Line (point, pointB, color) {
        Shape.call(this, point, color);
        this._pointB = pointB;
    }

    Line.extends(Shape);

    Line.prototype.getPointB = function() {
        return this._pointB;
    };

    Line.prototype.toString = function() {
        return Shape.prototype.toString.call(this) + ', Point B: ' + this._pointB;
    };

    return Line;
}());

var Segment = (function () {
    function Segment (point, pointB, color) {
        Shape.call(this, point, color);
        this._pointB = pointB;
    }

    Segment.extends(Shape);

    Line.prototype.getPointB = function() {
        return this._pointB;
    };

    Line.prototype.toString = function() {
        return Shape.prototype.toString.call(this) + ', Point B: ' + this._pointB;
    };

    return Segment;
}());


var rec = new Rectangle(new Point2D(1,2), null, 1);

console.log(rec);