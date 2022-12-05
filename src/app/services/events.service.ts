import {Injectable} from '@angular/core';
import {of} from 'rxjs';

@Injectable()
export class EventsService {
    fetchItems(radius: string, latitude: number, longitude: number, offset: string, page: number = 1, limit: number = 12) {
        // baseURL https://api.comehome.fun/v5/items
        return of(this.mockFetchItemsResponse());
    }

    private mockFetchItemsResponse(): any {
        return [{
            'id': 'event-637e7df5430e3c8131aa65fe', 'type': 'event-indoor', 'descriptor': {
                'id': '637e7df5430e3c8131aa65fe',
                'title': 'The Climbing Experience ',
                'organizer': {
                    'id': '633434e14965c39d08c4b289',
                    'display_name': 'Stefania Ferraro',
                    'rating': 5,
                    'reviews': 10,
                    'avatar': 'https://api.comehome.fun/users/633434e14965c39d08c4b289/avatar?v=7',
                    'status': {
                        'host': true,
                        'superhost': false,
                        'ambassador': false,
                        'trainer': false,
                        'top_customer': false
                    }
                },
                'organizers': {
                    'rating': 5,
                    'hosts': [{
                        'id': '633434e14965c39d08c4b289',
                        'display_name': 'Stefania Ferraro',
                        'rating': 5,
                        'reviews': 10,
                        'avatar': 'https://api.comehome.fun/users/633434e14965c39d08c4b289/avatar?v=7',
                        'status': {
                            'host': true,
                            'superhost': false,
                            'ambassador': false,
                            'trainer': false,
                            'top_customer': false
                        }
                    }]
                },
                'dates': {'start': '2022-12-05T18:30:00.000Z', 'timezone': 'Europe/Rome'},
                'ages': {'min': 25, 'max': 40, 'range': 'flexible'},
                'categories': [35],
                'status': 0,
                'cover_version': 1,
                'followers': 25,
                'attributes': {
                    'new': false,
                    'running_out': false,
                    'soldout': true,
                    'recommended': false,
                    'last_seat': false,
                    'suggested': false,
                    'activation': false,
                    'following': false,
                    'bought': false,
                    'free': false
                },
                'description': 'Ciao ragazzi !Vi propongo una serata diversa 1 ora di arrampicata con istruttore e al seguito bibita con aperitivo al costo di 20€ da pagare in loco! Siete pronti per provare questa esperienza insieme?☺️Richiesto abbigliamento sportivo bla bla bla',
                'languages': ['IT'],
                'participant_friends': {'count': 0, 'avatars': []},
                'location': {'zone': 'Villa S. Giovanni,Metro M1 ', 'city': 'Milano'},
                'covers': ['https://api.comehome.fun/events/637e7df5430e3c8131aa65fe/cover?v=1']
            }, 'order_id': '2022-12-05T18:30:00.000Z', 'next_page_offset': '2022-12-06T18:30:00.002Z'
        }]
    }
}
