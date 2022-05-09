import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeesService } from './coffees.service';
import { UpdateCoffeeDto } from 'src/coffees/dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeservice: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery) {
        return this.coffeservice.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id)
        this.coffeservice.findOne('' + id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeservice.create(createCoffeeDto)
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeservice.update(id, updateCoffeeDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeservice.remove(id)
    }
}
