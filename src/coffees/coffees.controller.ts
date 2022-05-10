import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { CoffeesService } from './coffees.service';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {

    constructor(private readonly coffeeservice: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {

        return this.coffeeservice.findAll(paginationQuery)
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        this.coffeeservice.findOne(id)
    }

    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeeservice.create(createCoffeeDto)
    }

    @Patch(":id")
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeservice.update(id, updateCoffeeDto)
    }

}
