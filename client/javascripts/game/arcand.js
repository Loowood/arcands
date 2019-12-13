class Arcand {

    // Constructors
    constructor(nb, texture){
        this.number = nb;
        this.texture = texture;
        this.existence = true;
        this.chosenOne = false;
    }


    display (x, y) {
        // push();
        // texture(canard1_texture);
        // rotateY(PI);
        // box(160, 240, 8);
        // pop();
        // push();
        // translate(0,0,8);
        // texture(dos_texture);
        // box(160, 240, 8);
        // pop();
        // push();
        // translate(80.5,0,4);
        // rotateY(PI/2);
        // texture(coteVertical_texture);
        // box(16, 240, 0.2);
        // pop();
        // push();
        // translate(-80.5,0,4);
        // rotateY(3 * PI/2);
        // texture(coteVertical_texture);
        // box(16, 240, 0.2);
        // pop();
        // push();
        // translate(0,120.5,4);
        // rotateX(PI/2);
        // texture(coteHorizontal_texture);
        // box(160, 16, 0.2);
        // pop();
        // push();
        // translate(0,-120.5,4);
        // rotateX(3 * PI/2);
        // texture(coteHorizontal_texture);
        // box(160, 16, 0.2);
        // pop();
        push();
            translate(x, y);
            //rotateX(frameCount * 0.01);
            rotateY(frameCount * map(this.number, 1,9,0.1,0.15));
            push();
            texture(this.texture);
            rotateY(PI);
            box(160, 240, 8);
            pop();
            push();
            translate(0,0,8);
            texture(Arcand.dos_texture);
            box(160, 240, 8);
            pop();
            push();
            translate(80.5,0,4);
            rotateY(PI/2);
            texture(Arcand.coteVertical_texture);
            box(16, 240, 0.2);
            pop();
            push();
            translate(-80.5,0,4);
            rotateY(3 * PI/2);
            texture(Arcand.coteVertical_texture);
            box(16, 240, 0.2);
            pop();
            push();
            translate(0,120.5,4);
            rotateX(PI/2);
            texture(Arcand.coteHorizontal_texture);
            box(160, 16, 0.2);
            pop();
            push();
            translate(0,-120.5,4);
            rotateX(3 * PI/2);
            texture(Arcand.coteHorizontal_texture);
            box(160, 16, 0.2);
            pop();
        pop();
    }
}
