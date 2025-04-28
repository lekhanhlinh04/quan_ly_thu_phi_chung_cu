import { Controller } from '@nestjs/common';
import { InvoiceDetailsService } from './invoice-details.service';

@Controller('invoice-details')
export class InvoiceDetailsController {
  constructor(private readonly invoiceDetailsService: InvoiceDetailsService) {}
}
