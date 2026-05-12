import { useState } from 'react';
import {
  alpha,
  useTheme,
} from '@mui/material/styles';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Drawer,
  Fab,
  GlobalStyles,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded';

const logo = '/assets/pro-saude-logo.png';
const heroBanner = '/assets/hero-banner.jpg';
const feed = '/assets/instagram-feed.jpg';
const postMae = '/assets/post-dia-das-maes.jpg';
const postTrabalhador = '/assets/post-dia-trabalhador.jpg';
const postHorario = '/assets/post-horario-feriado.jpg';
const facebookPost = '/assets/facebook-post-horario.jpg';

const WHATSAPP_NUMBER = '5517991056126';
const WHATSAPP_DISPLAY = '(17) 99105-6126';
const ADDRESS = 'Av. Romeu Strazzi, 1505 - São José do Rio Preto, SP';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Contato', href: '#contato' },
];

const services = [
  {
    title: 'Musculação',
    text: 'Estrutura para evolução de força, definição e qualidade de vida com acompanhamento próximo.',
    icon: <FitnessCenterRoundedIcon />,
  },
  {
    title: 'Condicionamento físico',
    text: 'Treinos para melhorar resistência, disposição, mobilidade e performance no dia a dia.',
    icon: <DirectionsRunRoundedIcon />,
  },
  {
    title: 'Emagrecimento',
    text: 'Rotina de treino estratégica para queimar calorias e construir constância com segurança.',
    icon: <LocalFireDepartmentRoundedIcon />,
  },
  {
    title: 'Ganho de massa',
    text: 'Planejamento para hipertrofia, progressão de carga e desenvolvimento muscular gradual.',
    icon: <EmojiEventsRoundedIcon />,
  },
];

const benefits = [
  'Ambiente próximo, limpo e acolhedor',
  'Treinos para iniciantes e avançados',
  'Horário amplo para encaixar na rotina',
  'Foco em saúde, estética e bem-estar',
];

const gallery = [
  {
    image: postMae,
    title: 'Comunicação humanizada',
    text: 'Posts comemorativos e conteúdo de relacionamento para fortalecer a marca.',
  },
  {
    image: postTrabalhador,
    title: 'Presença nas redes sociais',
    text: 'Identidade visual ativa para Instagram e Facebook com linguagem regional.',
  },
  {
    image: postHorario,
    title: 'Informação clara',
    text: 'Horários e avisos importantes apresentados de forma simples para alunos.',
  },
];

const schedules = [
  { day: 'Segunda a quinta', time: '05h30 às 21h30' },
  { day: 'Sexta-feira', time: '05h30 às 21h30' },
  { day: 'Sábado', time: '08h às 13h' },
];

function scrollToSection(href) {
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Header() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleNavigate = (href) => {
    setOpen(false);
    setTimeout(() => scrollToSection(href), 60);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: alpha('#ffffff', 0.84),
          backdropFilter: 'blur(18px)',
          borderBottom: `1px solid ${alpha(theme.palette.primary.main, 0.08)}`,
          color: 'text.primary',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 72, md: 82 }, gap: 2 }}>
            <Stack direction="row" spacing={1.4} alignItems="center" sx={{ flexGrow: 1 }}>
              <Avatar
                src={logo}
                alt="Logo Academia Pro Saúde Fitness"
                sx={{ width: 52, height: 52, border: `3px solid ${alpha(theme.palette.secondary.main, 0.45)}` }}
              />
              <Box>
                <Typography variant="h6" sx={{ lineHeight: 1, fontSize: { xs: 17, md: 20 } }}>
                  Pro Saúde Fitness
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 800 }}>
                  Academia em Rio Preto
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={0.5} sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <Button key={item.href} color="primary" onClick={() => handleNavigate(item.href)}>
                  {item.label}
                </Button>
              ))}
            </Stack>

            <Button
              component="a"
              href={whatsappUrl('Olá! Quero conhecer os planos da Academia Pro Saúde Fitness.')}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              color="secondary"
              startIcon={<WhatsAppIcon />}
              sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
            >
              Falar no WhatsApp
            </Button>

            <IconButton
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 310, p: 2.5 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
            <Stack direction="row" spacing={1.2} alignItems="center">
              <Avatar src={logo} sx={{ width: 42, height: 42 }} />
              <Typography variant="h6">Menu</Typography>
            </Stack>
            <IconButton onClick={() => setOpen(false)} aria-label="Fechar menu">
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
          <List>
            {navItems.map((item) => (
              <ListItemButton key={item.href} onClick={() => handleNavigate(item.href)} sx={{ borderRadius: 3, mb: 0.5 }}>
                <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 800 }} />
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            component="a"
            href={whatsappUrl('Olá! Quero conhecer os planos da Academia Pro Saúde Fitness.')}
            target="_blank"
            rel="noreferrer"
            variant="contained"
            color="secondary"
            startIcon={<WhatsAppIcon />}
            sx={{ mt: 2 }}
          >
            Chamar no WhatsApp
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

function SectionHeader({ eyebrow, title, text, align = 'center' }) {
  return (
    <Box sx={{ textAlign: align, maxWidth: 760, mx: align === 'center' ? 'auto' : 0, mb: { xs: 4, md: 6 } }}>
      <Chip label={eyebrow} color="secondary" sx={{ mb: 2 }} />
      <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 52 } }}>
        {title}
      </Typography>
      {text && (
        <Typography color="text.secondary" sx={{ mt: 2, fontSize: { xs: 17, md: 19 }, lineHeight: 1.75 }}>
          {text}
        </Typography>
      )}
    </Box>
  );
}

function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        position: 'relative',
        pt: { xs: 13, md: 16 },
        pb: { xs: 8, md: 12 },
        overflow: 'hidden',
        color: '#fff',
        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #075D86 46%, #082B3E 100%)`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.14,
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'saturate(1.3)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          bgcolor: alpha(theme.palette.secondary.main, 0.28),
          right: -120,
          top: 120,
          filter: 'blur(10px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: '50%',
          bgcolor: alpha('#00B8D9', 0.25),
          left: -80,
          bottom: 40,
          filter: 'blur(12px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 5, md: 7 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
              <Chip icon={<StarRoundedIcon />} label="Musculação" color="secondary" />
              <Chip label="Emagrecimento" sx={{ bgcolor: alpha('#fff', 0.14), color: '#fff', fontWeight: 800 }} />
              <Chip label="Condicionamento" sx={{ bgcolor: alpha('#fff', 0.14), color: '#fff', fontWeight: 800 }} />
            </Stack>

            <Typography variant="h1" sx={{ fontSize: { xs: 48, sm: 62, md: 82 }, maxWidth: 780 }}>
              Treine com saúde, energia e resultado.
            </Typography>
            <Typography sx={{ mt: 3, maxWidth: 640, color: alpha('#fff', 0.82), fontSize: { xs: 18, md: 21 }, lineHeight: 1.75 }}>
              Um site moderno para apresentar a Academia Pro Saúde Fitness, captar alunos pelo WhatsApp e fortalecer a presença digital da marca em São José do Rio Preto.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
              <Button
                component="a"
                href={whatsappUrl('Olá! Vim pelo site e gostaria de saber mais sobre a Academia Pro Saúde Fitness.')}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<WhatsAppIcon />}
              >
                Quero treinar agora
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => scrollToSection('#modalidades')}
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ color: '#fff', borderColor: alpha('#fff', 0.45), '&:hover': { borderColor: '#fff', bgcolor: alpha('#fff', 0.08) } }}
              >
                Conhecer modalidades
              </Button>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5} sx={{ mt: 4 }}>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <LocationOnRoundedIcon sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: alpha('#fff', 0.9), fontWeight: 700 }}>Av. Romeu Strazzi, 1505</Typography>
              </Stack>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <AccessTimeRoundedIcon sx={{ color: 'secondary.main' }} />
                <Typography sx={{ color: alpha('#fff', 0.9), fontWeight: 700 }}>05h30 às 21h30</Typography>
              </Stack>
            </Stack>
          </Box>

          <Box>
            <Card
              sx={{
                overflow: 'hidden',
                bgcolor: alpha('#fff', 0.13),
                backdropFilter: 'blur(22px)',
                border: `1px solid ${alpha('#fff', 0.18)}`,
                boxShadow: `0 34px 100px ${alpha('#000', 0.28)}`,
              }}
            >
              <Box sx={{ position: 'relative', minHeight: { xs: 330, md: 520 }, p: { xs: 2, md: 2.5 } }}>
                <Box
                  component="img"
                  src={feed}
                  alt="Rede social da Academia Pro Saúde Fitness"
                  sx={{
                    width: '100%',
                    height: { xs: 285, md: 460 },
                    objectFit: 'cover',
                    borderRadius: 5,
                    opacity: 0.9,
                  }}
                />
                <Paper
                  elevation={0}
                  sx={{
                    position: 'absolute',
                    left: { xs: 20, md: 28 },
                    right: { xs: 20, md: 28 },
                    bottom: { xs: 18, md: 24 },
                    p: 2,
                    borderRadius: 5,
                    bgcolor: alpha('#fff', 0.92),
                    backdropFilter: 'blur(12px)',
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={logo} sx={{ width: 66, height: 66 }} />
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" color="primary" sx={{ lineHeight: 1.1 }}>
                        Academia Pro Saúde
                      </Typography>
                      <Typography color="text.secondary" sx={{ fontWeight: 700 }}>
                        +1.700 seguidores nas redes
                      </Typography>
                    </Box>
                    <Chip label="Rio Preto" color="secondary" />
                  </Stack>
                </Paper>
              </Box>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function Stats() {
  const stats = [
    { value: '1.7k+', label: 'seguidores' },
    { value: '05h30', label: 'abertura' },
    { value: '4', label: 'focos de treino' },
    { value: '100%', label: 'contato via WhatsApp' },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: 'relative', zIndex: 4 }}>
      <Paper
        elevation={0}
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 1,
          p: { xs: 2, md: 3 },
          border: '1px solid',
          borderColor: 'divider',
          boxShadow: '0 22px 70px rgba(6, 63, 99, 0.12)',
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.label} sx={{ textAlign: 'center', p: 2 }}>
            <Typography variant="h3" color="primary" sx={{ fontSize: { xs: 30, md: 42 } }}>
              {stat.value}
            </Typography>
            <Typography color="text.secondary" sx={{ fontWeight: 800 }}>
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Container>
  );
}

function About() {
  return (
    <Box id="sobre" component="section" sx={{ py: { xs: 8, md: 13 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.95fr 1.05fr' },
            gap: { xs: 4, md: 7 },
            alignItems: 'center',
          }}
        >
          <Box>
            <SectionHeader
              align="left"
              eyebrow="Sobre nós"
              title="Uma academia de bairro com cara de marca forte."
              text="A Pro Saúde Fitness pode se apresentar na internet com um visual profissional, transmitindo confiança para quem quer começar a treinar e facilitando o primeiro contato pelo WhatsApp."
            />

            <Stack spacing={1.6}>
              {benefits.map((item) => (
                <Stack key={item} direction="row" spacing={1.3} alignItems="center">
                  <CheckCircleRoundedIcon color="success" />
                  <Typography sx={{ fontWeight: 800, color: 'text.secondary' }}>{item}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box sx={{ position: 'relative' }}>
            <Card sx={{ overflow: 'hidden' }}>
              <CardMedia component="img" image={facebookPost} alt="Post da Academia Pro Saúde Fitness" sx={{ height: { xs: 360, md: 500 }, objectFit: 'cover' }} />
            </Card>
            <Paper
              elevation={0}
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                width: { xs: '100%', md: 310 },
                right: { md: -30 },
                bottom: { md: 34 },
                mt: { xs: 2, md: 0 },
                p: 2.5,
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 22px 70px rgba(6, 63, 99, 0.14)',
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1 }}>
                <Avatar sx={{ bgcolor: 'secondary.main', color: 'primary.main' }}>
                  <ShieldRoundedIcon />
                </Avatar>
                <Typography variant="h6">Projeto comercial</Typography>
              </Stack>
              <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                Ideal para apresentar a proposta ao dono da academia e mostrar como um site pode gerar autoridade, confiança e mais contatos.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function Services() {
  return (
    <Box
      id="modalidades"
      component="section"
      sx={{
        py: { xs: 8, md: 13 },
        background: 'linear-gradient(180deg, #F5FAFC 0%, #FFFFFF 100%)',
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Modalidades"
          title="Tudo que o aluno procura em um só lugar."
          text="Blocos de serviço objetivos, com visual moderno, ajudam o visitante a entender rapidamente o que a academia oferece."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2.5 }}>
          {services.map((service) => (
            <Card key={service.title} sx={{ height: '100%', transition: '0.25s', '&:hover': { transform: 'translateY(-8px)' } }}>
              <CardContent sx={{ p: 3 }}>
                <Avatar
                  sx={{
                    width: 62,
                    height: 62,
                    mb: 2.5,
                    color: 'primary.main',
                    bgcolor: 'secondary.main',
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {service.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function Experience() {
  const items = [
    {
      icon: <GroupsRoundedIcon />,
      title: 'Acompanhamento próximo',
      text: 'Comunicação simples e contato rápido para transformar curiosos em novos alunos.',
    },
    {
      icon: <MonitorHeartRoundedIcon />,
      title: 'Saúde em primeiro lugar',
      text: 'Mensagem alinhada ao nome da academia: treinar com foco em bem-estar e qualidade de vida.',
    },
    {
      icon: <AccessTimeRoundedIcon />,
      title: 'Horários visíveis',
      text: 'Informações principais ficam fáceis de encontrar, inclusive pelo celular.',
    },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 11 }, bgcolor: 'primary.dark', color: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.85fr 1.15fr' }, gap: 4, alignItems: 'center' }}>
          <Box>
            <Chip label="Diferenciais" color="secondary" sx={{ mb: 2 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 50 } }}>
              Um visual que vende confiança antes da primeira visita.
            </Typography>
            <Typography sx={{ mt: 2, color: alpha('#fff', 0.75), fontSize: 18, lineHeight: 1.75 }}>
              A página foi pensada para parecer premium, responsiva e pronta para campanhas no Instagram, Facebook e Google.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' }, gap: 2 }}>
            {items.map((item) => (
              <Paper key={item.title} elevation={0} sx={{ p: 3, bgcolor: alpha('#fff', 0.08), color: '#fff', border: `1px solid ${alpha('#fff', 0.12)}` }}>
                <Avatar sx={{ bgcolor: 'secondary.main', color: 'primary.main', mb: 2 }}>{item.icon}</Avatar>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: alpha('#fff', 0.72), lineHeight: 1.65 }}>{item.text}</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function Gallery() {
  return (
    <Box component="section" sx={{ py: { xs: 8, md: 13 } }}>
      <Container maxWidth="lg">
        <SectionHeader
          eyebrow="Redes sociais"
          title="Fotos reais para aproximar o visitante da academia."
          text="As imagens das redes sociais entram como prova de presença local. Depois, podem ser substituídas por fotos profissionais da estrutura, equipe e alunos."
        />

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 0.8fr' }, gap: 2.5 }}>
          <Card sx={{ overflow: 'hidden', minHeight: { xs: 360, md: 620 } }}>
            <CardMedia component="img" image={feed} alt="Feed do Instagram Pro Saúde Fitness" sx={{ height: { xs: 360, md: 620 }, objectFit: 'cover' }} />
          </Card>
          <Stack spacing={2.5}>
            {gallery.map((item) => (
              <Card key={item.title} sx={{ display: 'grid', gridTemplateColumns: '125px 1fr', minHeight: 155, overflow: 'hidden' }}>
                <CardMedia component="img" image={item.image} alt={item.title} sx={{ height: '100%', objectFit: 'cover' }} />
                <CardContent sx={{ p: 2.2 }}>
                  <Typography variant="h6" sx={{ mb: 0.8 }}>
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.55 }}>
                    {item.text}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

function Schedule() {
  return (
    <Box id="horarios" component="section" sx={{ py: { xs: 8, md: 13 }, background: 'linear-gradient(180deg, #FFFFFF 0%, #F5FAFC 100%)' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.95fr 1.05fr' }, gap: { xs: 4, md: 6 }, alignItems: 'center' }}>
          <Box>
            <SectionHeader
              align="left"
              eyebrow="Horários"
              title="Horário claro para o aluno não perder o treino."
              text="Uma seção de horário facilita a decisão de quem está avaliando começar a treinar e quer saber se a academia encaixa na rotina."
            />
            <Card>
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Stack spacing={2}>
                  {schedules.map((item, index) => (
                    <Box key={item.day}>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                        <Typography sx={{ fontWeight: 900 }}>{item.day}</Typography>
                        <Chip label={item.time} color={index === 2 ? 'primary' : 'secondary'} />
                      </Stack>
                      {index < schedules.length - 1 && <Divider sx={{ mt: 2 }} />}
                    </Box>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>

          <Card sx={{ overflow: 'hidden', bgcolor: 'primary.dark', color: '#fff' }}>
            <CardMedia component="img" image={postHorario} alt="Horário de funcionamento" sx={{ height: { xs: 330, md: 500 }, objectFit: 'cover', opacity: 0.76 }} />
            <CardContent sx={{ p: 3.5 }}>
              <Stack direction="row" spacing={1.4} alignItems="center" sx={{ mb: 1 }}>
                <AccessTimeRoundedIcon color="secondary" />
                <Typography variant="h5">Funcionamento especial</Typography>
              </Stack>
              <Typography sx={{ color: alpha('#fff', 0.76), lineHeight: 1.7 }}>
                Avisos de feriado e comunicados podem ser atualizados no site para manter alunos informados e reduzir dúvidas no WhatsApp.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', goal: '', phone: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Olá! Vim pelo site da Academia Pro Saúde Fitness.%0A%0ANome: ${form.name || 'Não informado'}%0AObjetivo: ${form.goal || 'Não informado'}%0ATelefone: ${form.phone || 'Não informado'}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box id="contato" component="section" sx={{ py: { xs: 8, md: 13 }, bgcolor: 'primary.dark', color: '#fff' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'stretch' }}>
          <Box>
            <Chip label="Contato" color="secondary" sx={{ mb: 2 }} />
            <Typography variant="h2" sx={{ fontSize: { xs: 34, md: 52 }, mb: 2 }}>
              Agende sua visita pelo WhatsApp.
            </Typography>
            <Typography sx={{ color: alpha('#fff', 0.76), fontSize: 18, lineHeight: 1.75, mb: 3 }}>
              O objetivo desta página é levar o visitante para uma conversa direta. O botão de WhatsApp ajuda a captar interessados de forma simples.
            </Typography>

            <Stack spacing={2.2} sx={{ mb: 4 }}>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar sx={{ bgcolor: 'secondary.main', color: 'primary.main' }}><PhoneInTalkRoundedIcon /></Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 900 }}>WhatsApp</Typography>
                  <Typography sx={{ color: alpha('#fff', 0.75) }}>{WHATSAPP_DISPLAY}</Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar sx={{ bgcolor: 'secondary.main', color: 'primary.main' }}><LocationOnRoundedIcon /></Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 900 }}>Endereço</Typography>
                  <Typography sx={{ color: alpha('#fff', 0.75) }}>{ADDRESS}</Typography>
                </Box>
              </Stack>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar sx={{ bgcolor: 'secondary.main', color: 'primary.main' }}><EmailRoundedIcon /></Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 900 }}>Redes sociais</Typography>
                  <Typography sx={{ color: alpha('#fff', 0.75) }}>Instagram e Facebook da academia</Typography>
                </Box>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1.2}>
              <IconButton component="a" href="https://www.instagram.com/academiaprosauderiopreto/" target="_blank" rel="noreferrer" aria-label="Instagram" sx={{ bgcolor: alpha('#fff', 0.1), color: '#fff' }}>
                <InstagramIcon />
              </IconButton>
              <IconButton component="a" href="https://www.facebook.com/search/top?q=academia%20pro%20saude" target="_blank" rel="noreferrer" aria-label="Facebook" sx={{ bgcolor: alpha('#fff', 0.1), color: '#fff' }}>
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>

          <Paper elevation={0} sx={{ p: { xs: 2.5, md: 4 }, borderRadius: 5 }}>
            <Typography variant="h4" color="primary" sx={{ mb: 1 }}>
              Receba mais informações
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
              Preencha os campos e o site abre uma mensagem pronta no WhatsApp da academia.
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField required label="Seu nome" name="name" value={form.name} onChange={handleChange} fullWidth />
                <TextField label="Seu objetivo" name="goal" value={form.goal} onChange={handleChange} placeholder="Ex: emagrecimento, massa muscular, saúde" fullWidth />
                <TextField label="Telefone" name="phone" value={form.phone} onChange={handleChange} fullWidth />
                <Button type="submit" variant="contained" color="secondary" size="large" startIcon={<WhatsAppIcon />}>
                  Enviar para o WhatsApp
                </Button>
              </Stack>
            </Box>

            <Box sx={{ mt: 3, overflow: 'hidden', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
              <Box
                component="iframe"
                title="Mapa Academia Pro Saúde Fitness"
                src="https://www.google.com/maps?q=Av.%20Romeu%20Strazzi%201505%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20SP&output=embed"
                sx={{ display: 'block', width: '100%', height: 250, border: 0 }}
                loading="lazy"
              />
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: '#031E2E', color: '#fff' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', md: 'center' }} justifyContent="space-between">
          <Stack direction="row" spacing={1.5} alignItems="center">
            <Avatar src={logo} sx={{ width: 54, height: 54 }} />
            <Box>
              <Typography variant="h6">Academia Pro Saúde Fitness</Typography>
              <Typography sx={{ color: alpha('#fff', 0.68) }}>Site demonstrativo para apresentação comercial</Typography>
            </Box>
          </Stack>
          <Typography sx={{ color: alpha('#fff', 0.68) }}>
            Desenvolvido por ArchangelSoft.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          html: { scrollBehavior: 'smooth' },
          body: {
            minWidth: 320,
            overflowX: 'hidden',
          },
          '::selection': {
            background: '#B9E500',
            color: '#05283F',
          },
          a: {
            color: 'inherit',
            textDecoration: 'none',
          },
        }}
      />
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Experience />
        <Gallery />
        <Schedule />
        <Contact />
      </main>
      <Footer />
      <Fab
        component="a"
        href={whatsappUrl('Olá! Quero saber mais sobre a Academia Pro Saúde Fitness.')}
        target="_blank"
        rel="noreferrer"
        color="success"
        aria-label="WhatsApp"
        sx={{ position: 'fixed', right: 22, bottom: 22, color: '#fff', boxShadow: '0 18px 45px rgba(29, 185, 84, 0.4)' }}
      >
        <WhatsAppIcon />
      </Fab>
    </>
  );
}
